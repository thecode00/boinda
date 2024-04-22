import React, { useState } from "react";
import Drop from "../components/Drop";
import { NavLink } from "react-router-dom";

function Home() {
  const [isFileUpload, setIsFileUpload] = useState(false);
  return (
    <>
      <Drop />
    </>
  );
}

export default Home;
