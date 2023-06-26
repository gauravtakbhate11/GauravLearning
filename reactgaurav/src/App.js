import React from "react";
import Counter from "./counter";
import CounterHooks from "./counterHooks";

function App() {
  return (
    <>
      counter
      <Counter initialCount={0} />
      counter hooks
      <CounterHooks initialCount={0} />
    </>
  );
}

export default App;
