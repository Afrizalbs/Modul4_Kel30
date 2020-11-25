import React, { useReducer } from "react";
import "./reducer.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const LearnUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Main">
      <div className="titleReducer">Count = {count}</div>
      <div className="ViewButton">
        <div className="ViewButton2">
          <button
            className="ButtonReducer"
            onClick={() => dispatch("increment")}
          >
            Increment
          </button>
        </div>
        <div className="ViewButton1">
          <button
            className="ButtonReducer"
            onClick={() => dispatch("decrement")}
          >
            Decrement
          </button>
        </div>
        <div className="ViewButton1">
          <button className="ButtonReducer" onClick={() => dispatch("reset")}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnUseReducer;
