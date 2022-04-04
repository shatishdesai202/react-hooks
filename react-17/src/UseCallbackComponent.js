import React, { useState, useCallback, useMemo } from "react";
import Button from "./UseCallback/Button";
import Count from "./UseCallback/Count";
import Title from "./UseCallback/Title";

function UseCallbackComponent() {
  console.log("Parent Componet");
  const [count, setCount] = useState(100);
  const [salary, setSalary] = useState(90000);

  // const increaseCounter = () =>{
  //   setCount( prev => prev + 1 )
  // }

  // const increaseSalary = () =>{
  //   setSalary( prev => prev + 2000 )
  // }

  const increaseCounter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const increaseSalary = useCallback(() => {
    setSalary((prev) => prev + 2000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text={"count"} value={count} />
      <Button text={"count increase"} handleFunction={increaseCounter} />
      <Count text={"salary"} value={salary} />
      <Button text={"salary increase"} handleFunction={increaseSalary} />
    </div>
  );
}

export default UseCallbackComponent;
