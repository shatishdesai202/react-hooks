import React, { useRef, useState } from "react";

function InputForm({ todos, todosDispatch }) {
  
  console.log(todos);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let object = {
      task: inputValue,
      status: false,
      id: Date.now(),
    };
    todosDispatch({ type: "ADD", payload: object });
    inputRef.current.blur();
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
      </form>

      {todos &&
        todos.map((item) => {
          return (
            <div style={{ color: item.status ? "green" : "red" }}>
              {" "}
              {item.task} || {item.status} || {item.id}
              <button
                onClick={() =>
                  todosDispatch({ type: "UPDATE_STATUS", payload: item })
                }
              >
                {" "}
                toggle Status{" "}
              </button>
              <button
                onClick={() => todosDispatch({ type: "DELETE", payload: item })}
              >
                {" "}
                DELETE TASK{" "}
              </button>
            </div>
          );
        })}
    </>
  );
}

export default InputForm;
