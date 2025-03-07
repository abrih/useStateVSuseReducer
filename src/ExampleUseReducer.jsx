import React, { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};
const ExampleUseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      <h1>Counter with useReducer</h1>
      <p>Count: {state.count}</p>

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

export default ExampleUseReducer;























// Note
// Benefits of this pattern:
// Decouples state management: The logic for how state should change is kept separate from the components. Components just dispatch actions, and the reducer decides how to update the state.
// Predictable state transitions: By mapping actions to state transitions in a central place (the reducer), the app's state changes become predictable and easier to reason about.
// Testability: Since reducers are pure functions, you can easily test them in isolation without worrying about the rest of the app.
// Summary:
// The dispatch function sends an action to a reducer.
// The reducer processes the action and returns a new state.
// This pattern provides an implicit way to update state because the actual state change happens inside the reducer based on the dispatched action.
