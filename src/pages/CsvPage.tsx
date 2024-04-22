import React from "react";
import { useParams } from "react-router-dom";

function CsvPage() {
  const params = useParams();
  return (
    <div>
      CsvPage<div>{params.csvString}</div>
    </div>
  );
}

export default CsvPage;
