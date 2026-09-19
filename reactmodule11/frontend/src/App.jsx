import { useState } from "react";

function App() {

    const [message, setMessage] = useState("");

    const getMessage = () => {

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
            <h1>Module 11 - React Deployment</h1>

            <button onClick={getMessage}>
                Get Backend Message
            </button>

            <h2>{message}</h2>
        </div>
    );
}

export default App;