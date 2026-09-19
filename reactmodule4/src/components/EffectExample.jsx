import { useEffect, useState } from "react";

function EffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="card">
      <h2>2. useEffect</h2>

      <h3>Count: {count}</h3>

      <p>
        Check the browser tab title when the count changes.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default EffectExample;