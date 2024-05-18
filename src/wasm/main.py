
import js
import io
from pyodide.ffi import create_proxy
import pyodide_js

is_package_downloaded = False


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

    file = event.detail.file

    fr = js.FileReader.new()
    fr.onload = lambda e: process_csv(e.target.result)
    fr.readAsText(file)
    print(dir(js.FileReader.new()))
    # print("File received:", file, type(file), dir(file))

    # # CSV 데이터를 처리하는 함수
    def process_csv(data):
        # pandas를 사용하여 CSV 데이터 읽기
        df = pd.read_csv(io.StringIO(data))


get_data_proxy = create_proxy(get_data)


js.document.addEventListener("data-to-pyscript", get_data_proxy)
print("Event ready")
