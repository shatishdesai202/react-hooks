import React, { useEffect, useState } from "react";

function UseEffectComponent() {
  const [age, setAge] = useState(1);


  useEffect(() => {
    alert("use Effect called only one Time");
  },[]);

  useEffect(() => {
    alert(`someone hit button ${age}`);
    return () => {
     console.log('clean up')
    }

}, [age]);

  return (
    <div>
      <h1>Use Effect </h1>
      <div>
        We can use this effect to replicate events like componentDidUpdate,
        componentDidMount, componentWillUnmount and shouldComponentUpdate
      </div>
      <ul>
        <li>Making asynchronous API calls for data</li>
        <li>Setting a subscription to an observable</li>
        <li>Manually updating the DOM element</li>
        <li>Updating global variables from inside a function</li>
      </ul>
      <h1>Example Of UseState</h1>
      <h2>{age}</h2>

      <button onClick={() => setAge((prev) => prev + 1)}>Hit me</button>
    </div>
  );
}


export default UseEffectComponent;


