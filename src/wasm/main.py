
import string
import time
import js
import io
from pyodide.ffi import create_proxy
import pyodide_js

is_package_downloaded = False
df = None


def dataframe_to_csv(data):
    return df.to_csv(data)


def data_to_js(data, key: string):  # 데이터는 항상 문자열로
    print("data_to_pyscript", data)
    js.jsStore._notify("test", data)


async def install_packages():  # 필요한 패키지를 동적으로 다운로드
    global pd
    await pyodide_js.loadPackage("micropip")
    import micropip
    await micropip.install(['pandas'])
    import pandas as pd
    print('Packages installed!')


async def get_data(event):
    global is_package_downloaded
    if not is_package_downloaded:
        await install_packages()
        is_package_downloaded = True
    start = time.time()

    file = event.detail.data

    fr = js.FileReader.new()
    fr.onload = lambda e: print("time :", time.time() - start)
    fr.readAsText(file)
    # print("File received:", file, type(file), dir(file))

    # # CSV 데이터를 처리하는 함수


def process_csv(data):
    global df
    # pandas를 사용하여 CSV 데이터 읽기
    df = pd.read_csv(io.StringIO(data))


def get_csv_type_info():
    if not df:
        return ""

    return dataframe_to_csv(df.info())


end_point = {
    "file": get_data,
    "getType": data_to_js(get_csv_type_info(), "type"),
}


def store(data):  # 자바스크립트와의 통신을 담당하는 함수
    if data.detail.key in end_point:
        end_point[data.detail.key](data)


get_data_proxy = create_proxy(store)


js.document.addEventListener("data-to-pyscript", get_data_proxy)
print("Event ready")
