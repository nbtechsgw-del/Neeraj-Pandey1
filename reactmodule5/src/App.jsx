// // function Form() {
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     console.log("Form submitted");
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="text" />

// //       <button type="submit">
// //         Submit
// //       </button>
// //     </form>
// //   );
// // }

// // export default Form;


// import { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name === "") {
//       setError("Name is required");
//       return;
//     }

//     if (email === "") {
//       setError("Email is required");
//       return;
//     }

//     setError("");

//     alert("Form submitted successfully!");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter name"
//       />

//       <br /><br />

//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter email"
//       />

//       <br /><br />

//       {error && <p>{error}</p>}

//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default Form;

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;