import React, { useState } from "react";
import store from "../../logic/store";

function Chart() {
  const [csvData, setCsvData] = useState(null);
  // TODO: d3.js적용
  store.subscribe("csvData", (data: any) => {
    setCsvData(data);
  });
  return <div>Chart</div>;
}

export default Chart;
