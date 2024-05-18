
import pandas as pd
import asyncio
import js
import io
from pyodide.ffi import create_proxy, JsProxy
import micropip
is_package_downloaded = False


def get_data(event):

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
        print(df)


get_data_proxy = create_proxy(get_data)

js.document.addEventListener("data-to-pyscript", get_data_proxy)
print("Event ready")
