// Higher Order Components (HOC)
// function withMessage(Component) {
//   return function NewComponent() {
//     return (
//       <div>
//         <h2>Hello from HOC</h2>
//         <Component />
//       </div>
//     );
//   };
// }

// function User() {
//   return <h3>Welcome Neeraj</h3>;
// }

// const EnhancedUser = withMessage(User);

// function App() {
//   return <EnhancedUser />;
// }

// export default App;


// Render Props

// function User({ render }) {
//   const name = "Neeraj";

//   return render(name);
// }

// function App() {
//   return (
//     <User
//       render={(name) => <h2>Hello, {name}</h2>}
//     />
//   );
// }

// export default App;

// 3. React Fragments

// function App() {
//   return (
//     <>
//       <h1>Hello</h1>
//       <p>Welcome to React</p>
//     </>
//   );
// }

// export default App;


// 4. React Portals

// import { createPortal } from "react-dom";

// function Modal() {
//   return createPortal(
//     <div>
//       <h2>This is a Modal</h2>
//       <button>Close</button>
//     </div>,
//     document.getElementById("modal")
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <Modal />
//     </div>
//   );
// }

// export default App;

//  Error Boundaries

// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hasError: false
//     };
//   }

//   static getDerivedStateFromError(error) {
//     return {
//       hasError: true
//     };
//   }

//   componentDidCatch(error, info) {
//     console.log(error);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong.</h2>;
//     }

//     return this.props.children;
//   }
// }

// function App() {
//   return (
//     <ErrorBoundary>
//       <h1>Hello React</h1>
//     </ErrorBoundary>
//   );
// }

// export default App;