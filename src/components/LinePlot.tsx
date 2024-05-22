import { csvState } from "./Drop";
import { useRecoilValue } from "recoil";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function LinePlot({
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20,
}) {
  const svgRef = useRef(null);
  const data = useRecoilValue(csvState);
  console.log(data);

  const x = d3.scaleLinear();

  return <svg ref={svgRef}></svg>;
}
