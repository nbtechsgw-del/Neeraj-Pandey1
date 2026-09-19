import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const getData = () => {
    fetch("http://localhost:5000/api/message")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>React Deployment Demo</h1>

      <button onClick={getData}>
        Get Backend Data
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;