import React, { useState } from "react";

function UseStateComponent() {
  const [age, setAge] = useState(18);

  const handleClick = () => {
    setAge( prev => prev + 1);
  };

  const resetAge = () =>{
      setAge(18)
  }

  return (
    <div>
      <h1> Use State  </h1>
      <h3>
        => useState hook is a function which is used to store state value in a
        functional component. It accepts an argument as the initial value of the
        state. It returns an array with 2 elements. First element is the current
        value of state. Second element is a function to update the state.
      </h3>

      <h1>My Age IS <span style={{background: 'red'}}> {age}  </span> </h1>
      <div>
      <button onClick={() => handleClick()}> Increase Age </button>
      <button style={{marginLeft: '10px'}} onClick={() => resetAge()}> Reset Age </button>
      </div>
      
    </div>
  );
}

export default UseStateComponent;
