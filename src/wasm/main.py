
import string
import js
import io
from pyodide.ffi import create_proxy
import pyodide_js

is_package_downloaded = False
df = None


def data_to_js(data, key: string):  # 데이터는 항상 문자열로
    print("data_to_js", data)
    js.jsStore.getDataFromPyscript(key, data)


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

    file = event.detail.data

    fr = js.FileReader.new()
    fr.onload = lambda e: process_csv(e.target.result)
    fr.readAsText(file)


def process_csv(data):
    global df
    # pandas를 사용하여 CSV 데이터 읽기
    df = pd.read_csv(io.StringIO(data))
    data_to_js(get_csv_type_info(), "type")


def get_csv_type_info():
    global df
    try:
        buffer = io.StringIO()
        df.info(buf=buffer)
        info_str = buffer.getvalue()
        lines = [line.split() for line in info_str.splitlines()[3:-2]]

        return pd.DataFrame(lines).to_csv()
    except Exception as e:
        print("Error : ", e)
        return "Error" + str(e)


end_point = {
    "file": get_data,
    "getType": lambda: data_to_js(get_csv_type_info(), "type"),
}


async def store(data):  # 자바스크립트와의 통신을 담당하는 함수
    if data.detail.key in end_point:
        await end_point[data.detail.key](data)


get_data_proxy = create_proxy(store)


js.document.addEventListener("data-to-pyscript", get_data_proxy)
print("Event ready")
