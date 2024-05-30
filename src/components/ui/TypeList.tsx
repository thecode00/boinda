import React, { useState } from "react";
import * as d3 from "d3";
import store from "../../store/store";

function TypeList() {
  const [types, setTypes] = useState([]);
  store.subscribe("type", (data: string) => {
    setTypes(d3.csvParse(data).slice(2));
  });
  // 부트스트랩 적용
  return (
    <div>
      {types.map((data) => {
        return (
          <>
            <p>{data[1]}</p>
            <p>{`Non-null: ${data[2]}`}</p>
            <p>{data[4]}</p>
          </>
        );
      })}
    </div>
  );
}

export default TypeList;
