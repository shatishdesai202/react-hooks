import React, { useReducer } from "react";
import InputForm from "./UseReducer/InputForm";

function UseReducerComponent() {
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return { count: state.count + 1 };
        break;

      case "decrement":
        return { count: state.count - 1 };
        break;

      default:
        return state;
    }
  };

  const todoReducer = (todos, action) => {
    switch (action.type) {
      case "ADD":
        return [...todos, action.payload];
        break;

      case "DELETE":
        return todos.filter( (item) => item.id !== action.payload.id  )
      break;

      case "UPDATE_STATUS":
        return todos.map((item) =>{
            if(item.id === action.payload.id){
                return { ...item, status: ! item.status}
            }
            return item
        }
        );
        break;

    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [todos, todosDispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <h1>useReducer Example </h1>
      <h3> {state.count} </h3>
      <button onClick={() => dispatch("increment")}> Increment Counter </button>
      <button onClick={() => dispatch("decrement")}> Decrement Counter </button>
      <br />
      <br />
      <InputForm todos={todos} todosDispatch={todosDispatch} />
    </div>
  );
}

export default UseReducerComponent;
