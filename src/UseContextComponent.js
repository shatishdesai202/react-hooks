import React, { useContext } from "react";
import { ColorContext } from "./ColorContext";

function UseContextComponent() {
  const color = useContext(ColorContext);

  return (
    <div>
      <h1 style={{ backgroundColor: color.yellow }}> useContext Example </h1>
    </div>
  );
}

export default UseContextComponent;
