
// // // // //get api uses


// // // // import { useEffect, useState } from "react";

// // // // function App() {
// // // //   const [users, setUsers] = useState([]);

// // // //   useEffect(() => {
// // // //     fetch("https://jsonplaceholder.typicode.com/users")
// // // //       .then((response) => response.json())
// // // //       .then((data) => {
// // // //         setUsers(data);
// // // //       })
// // // //       .catch((error) => {
// // // //         console.log(error);
// // // //       });
// // // //   }, []);

// // // //   return (
// // // //     <div>
// // // //       <h1>User List</h1>

// // // //       {users.map((user) => (
// // // //         <div key={user.id}>
// // // //           <h3>{user.name}</h3>
// // // //           <p>Email: {user.email}</p>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;




// // // import { useState } from "react";

// // // function App() {
// // //   const [message, setMessage] = useState("");

// // //   const addUser = () => {
// // //     const user = {
// // //       name: "Neeraj",
// // //       email: "neeraj@example.com",
// // //     };

// // //     fetch("https://jsonplaceholder.typicode.com/users", {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify(user),
// // //     })
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         console.log(data);
// // //         setMessage("User added successfully!");
// // //       })
// // //       .catch((error) => {
// // //         console.log(error);
// // //         setMessage("Something went wrong");
// // //       });
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>POST API Example</h1>

// // //       <button onClick={addUser}>Add User</button>

// // //       <p>{message}</p>
// // //     </div>
// // //   );
// // // }

// // // export default App;




// // import { useState } from "react";

// // function App() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const user = {
// //       name: name,
// //       email: email,
// //     };

// //     fetch("https://jsonplaceholder.typicode.com/users", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(user),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data);
// //         setMessage("User added successfully!");

// //         setName("");
// //         setEmail("");
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         setMessage("Something went wrong");
// //       });
// //   };

// //   return (
// //     <div>
// //       <h1>Add User</h1>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Enter Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />

// //         <br /><br />

// //         <input
// //           type="email"
// //           placeholder="Enter Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />

// //         <br /><br />

// //         <button type="submit">Submit</button>
// //       </form>

// //       <h3>{message}</h3>
// //     </div>
// //   );
// // }

// // export default App;




// // put method i am learning

// // import { useState } from "react";

// // function App() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const user = {
// //       name: name,
// //       email: email,
// //     };

// //     fetch("https://jsonplaceholder.typicode.com/users/1", {
// //       method: "PUT",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(user),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data);
// //         setMessage("User updated successfully!");

// //         setName("");
// //         setEmail("");
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         setMessage("Something went wrong");
// //       });
// //   };

// //   return (
// //     <div>
// //       <h1>Update User</h1>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Enter New Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />

// //         <br />
// //         <br />

// //         <input
// //           type="email"
// //           placeholder="Enter New Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />

// //         <br />
// //         <br />

// //         <button type="submit">Update User</button>
// //       </form>

// //       <h3>{message}</h3>
// //     </div>
// //   );
// // }

// // export default App;


// //delete apis



// // import { useState } from "react";

// // function App() {
// //   const [message, setMessage] = useState("");

// //   const deleteUser = () => {
// //     fetch("https://jsonplaceholder.typicode.com/users/1", {
// //       method: "DELETE",
// //     })
// //       .then((response) => {
// //         if (response.ok) {
// //           setMessage("User deleted successfully!");
// //         }
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         setMessage("Something went wrong");
// //       });
// //   };

// //   return (
// //     <div>
// //       <h1>Delete User</h1>

// //       <button onClick={deleteUser}>
// //         Delete User
// //       </button>

// //       <h3>{message}</h3>
// //     </div>
// //   );
// // }

// // export default App;


// // console handeling


// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>Error: {error}</h2>;
//   }

//   return (
//     <div>
//       <h1>User List</h1>

//       {users.map((user) => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;