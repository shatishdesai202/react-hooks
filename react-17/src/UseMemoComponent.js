import React, { useState, useMemo } from "react";

function UseMemoComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const increaseCount2 = () => {
    setCount2((prev) => prev + 1);
  };

  //   const isEven = () =>{
  //       let i=0;
  //       while (i < 2000000000) i++;
  //       return count % 2 === 0;
  //   }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <h1> Use Memo Example </h1>
      <button onClick={increaseCount}>
        increase counter -1 {count} is {isEven ? "even" : "odd"}
      </button>

      <button onClick={increaseCount2}> increase counter -2 {count2} </button>
    </div>
  );
}

export default UseMemoComponent;
