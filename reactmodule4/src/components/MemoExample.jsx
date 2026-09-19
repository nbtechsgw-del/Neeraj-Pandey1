import { useMemo, useState } from "react";

function MemoExample() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating square...");

    return number * number;
  }, [number]);

  return (
    <div className="card">
      <h2>4. useMemo</h2>

      <h3>Number: {number}</h3>

      <h3>Square: {square}</h3>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default MemoExample;