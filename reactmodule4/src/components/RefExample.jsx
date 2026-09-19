import { useRef } from "react";

function RefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="card">
      <h2>3. useRef</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default RefExample;