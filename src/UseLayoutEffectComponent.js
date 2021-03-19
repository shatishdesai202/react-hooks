import React, { useEffect, useState, useLayoutEffect } from "react";

function UseLayoutEffectComponent() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  useEffect(() => {
    console.log("useEffect");
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div>
      <h1> UseLayoutEffect Example 😎 </h1>
      <button onClick={() => setValue(0)}>hit me {value}</button>
    </div>
  );
}

export default UseLayoutEffectComponent;
