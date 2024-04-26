import * as d3 from "d3";
import { useRef, useEffect } from "react";
import { csvState } from "./Drop";
import { useRecoilValue } from "recoil";

export default function LinePlot({}) {
  const data = useRecoilValue(csvState)[0];
  console.log(data);
  return <></>;
}
