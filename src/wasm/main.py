import pandas as pd
import js
import io
from pyodide.ffi import create_proxy, JsProxy

df = None


def get_data(event):
    file = event.detail.file
    print("File received:", file, type(file), dir(file))
    print("Reading file...", js.FileReader, js.new)
    # # FileReader를 사용하여 파일 내용을 읽어옵니다.
    # def read_file(file):
    #     reader = JsProxy.new(js.FileReader())
    #     reader.onload = create_proxy(lambda e: process_csv(e.target.result))
    #     reader.readAsText(file)

    # # CSV 데이터를 처리하는 함수
    # def process_csv(data):
    #     # pandas를 사용하여 CSV 데이터 읽기
    #     df = pd.read_csv(io.StringIO(data))
    #     print(df)  # CSV 데이터를 출력합니다.

    # read_file(file)


get_data_proxy = create_proxy(get_data)


js.document.addEventListener("data-to-pyscript", get_data_proxy)
print("Event ready")
