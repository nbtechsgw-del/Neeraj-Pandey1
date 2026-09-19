import { useCallback, useState } from "react";

function CallbackExample() {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    alert("Hello from useCallback!");
  }, []);

  return (
    <div className="card">
      <h2>5. useCallback</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={sayHello}>
        Say Hello
      </button>
    </div>
  );
}

export default CallbackExample;