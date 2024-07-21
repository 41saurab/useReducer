import React, { useReducer } from "react";
import './reducer.css';

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <p className="counter">{state}</p>
      <button
        className="button button-increment"
        onClick={() => dispatch({ type: "Increment" })}
      >
        Increase
      </button>
      <button
        className="button button-decrement"
        onClick={() => dispatch({ type: "Decrement" })}
      >
        Decrease
      </button>
    </div>
  );
};

export default UseReducer;
