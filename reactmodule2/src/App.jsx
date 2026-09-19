
// // import React from "react";

// // class Welcome extends React.Component {
// //   render() {
// //     return <h1>Hello, Neeraj!</h1>;
// //   }
// // }

// // export default Welcome;



// // function Student(props) {
// //   return <h2>Name: {props.name}</h2>;
// // }

// // function App() {
// //   return <Student name="Neeraj" />;
// // }

// // export default App;

// /*use state*/


// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default Counter;


// evemt handelling




// function App() {
//   function handleClick() {
//     alert("Button clicked!");
//   }

//   return (
//     <button onClick={handleClick}>
//       Click Me
//     </button>
//   );
// }

// export default App;



// Conditional Rendering



// function App() {
//   const isLoggedIn = true;

//   if (isLoggedIn) {
//     return <h1>Welcome User</h1>;
//   }

//   return <h1>Please Login</h1>;
// }

// export default App;



// 5. Lists and Keys


// function App() {
//   const students = ["Neeraj", "Rahul", "Aman"];

//   return (
//     <ul>
//       {students.map((student) => (
//         <li>{student}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;


function App() {
  const students = [
    { id: 1, name: "Neeraj" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
  ];

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name}
        </li>
      ))}
    </ul>
  );
}

export default App;