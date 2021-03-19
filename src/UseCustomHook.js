import React, { useState } from "react";
import UseInput from "./UseCustom/UseInput";

function UseCustomHook() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName,  bindFirstName, resetFirstName] = UseInput("");
  const [lastName, bindLastName, resetLastName] = UseInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(firstName + " " +lastName);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* without custome hook */}

        {/* <input value={firstName} onChange = { (e)=> setFirstName(e.target.value) } />  
          <input value={lastName}  onChange = { (e)=> setLastName(e.target.value) } /> */}
        
        <input {...bindFirstName} type="text" />
        <input {...bindLastName} type="text" />
        <input type="submit" />

      </form>
    </div>
  );
}

export default UseCustomHook;
