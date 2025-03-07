import React, { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_OR_DECREASE_BY":
      return state + action.by;
    default:
      throw new Error();
  }
};

const Example3UseReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE_OR_DECREASE_BY", by: 5 });
  };

  const handleDecrease = () => {
    dispatch({ type: "INCREASE_OR_DECREASE_BY", by: -5 });
  };

  return (
    <div>
      <h1>Counter with useReducer</h1>
      {/* <p> using the optional payload that comes with every dispatched action object, we could specify how much we want to increase or decrease countfrom the outside of the reducer</p> */}
      <p>Count: {count}</p>

      <div>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
      </div>
    </div>
  );
};
export default Example3UseReducer;
