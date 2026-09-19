import Counter from "./components/Counter";
import EffectExample from "./components/EffectExample";
import RefExample from "./components/RefExample";
import MemoExample from "./components/MemoExample";
import CallbackExample from "./components/CallbackExample";

import useCounter from "./hooks/useCounter";

import "./App.css";

function App() {
  const {
    count,
    increase,
    decrease,
    reset,
  } = useCounter();

  return (
    <div className="container">
      <h1>React Hooks Practice</h1>

      <Counter />

      <EffectExample />

      <RefExample />

      <MemoExample />

      <CallbackExample />

      <div className="card">
        <h2>6. Custom Hook</h2>

        <h3>Count: {count}</h3>

        <button onClick={increase}>
          Increase
        </button>

        <button onClick={decrease}>
          Decrease
        </button>

        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;