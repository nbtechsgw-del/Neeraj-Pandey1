// function App() {
//   const laptop = {
//     name: "HP Laptop",
//     price: 55000,
//     ram: "8GB",
//     storage: "512GB SSD"
//   };

//   return <Parent laptop={laptop} />;
// }

// function Parent({ laptop }) {
//   return <ChildA laptop={laptop} />;
// }

// function ChildA({ laptop }) {
//   return <ChildB laptop={laptop} />;
// }

// function ChildB({ laptop }) {
//   return <ChildC laptop={laptop} />;
// }

// function ChildC({ laptop }) {
//   return (
//     <div>
//       <h1>Laptop Details</h1>

//       <p>Name: {laptop.name}</p>
//       <p>Price: ₹{laptop.price}</p>
//       <p>RAM: {laptop.ram}</p>
//       <p>Storage: {laptop.storage}</p>
//     </div>
//   );
// }

// export default App;

// // context api xample
// import { createContext, useContext } from "react";

// // 1. Create Context
// const LaptopContext = createContext();

// function App() {
//   const laptop = {
//     name: "HP Laptop",
//     price: 55000,
//     ram: "8GB",
//     storage: "512GB SSD"
//   };

//   return (
//     // 2. Provide data
//     <LaptopContext.Provider value={laptop}>
//       <Parent />
//     </LaptopContext.Provider>
//   );
// }

// function Parent() {
//   return <ChildA />;
// }

// function ChildA() {
//   return <ChildB />;
// }

// function ChildB() {
//   return <ChildC />;
// }

// function ChildC() {
//   // 3. Get data directly from Context
//   const laptop = useContext(LaptopContext);

//   return (
//     <div>
//       <h1>Laptop Details</h1>

//       <p>Name: {laptop.name}</p>
//       <p>Price: ₹{laptop.price}</p>
//       <p>RAM: {laptop.ram}</p>
//       <p>Storage: {laptop.storage}</p>
//     </div>
//   );
// }

// export default App;



// import { useReducer } from "react";

// // Reducer function
// function reducer(state, action) {
//   if (action.type === "increase") {
//     return {
//       quantity: state.quantity + 1
//     };
//   }

//   if (action.type === "decrease") {
//     return {
//       quantity: state.quantity > 1
//         ? state.quantity - 1
//         : 1
//     };
//   }

//   if (action.type === "reset") {
//     return {
//       quantity: 1
//     };
//   }

//   return state;
// }

// function App() {
//   // Initial state
//   const [state, dispatch] = useReducer(reducer, {
//     quantity: 1
//   });

//   const price = 55000;

//   return (
//     <div>
//       <h1>Laptop Shop</h1>

//       <h2>HP Laptop</h2>
//       <p>Price: ₹{price}</p>

//       <h3>Quantity: {state.quantity}</h3>

//       <button onClick={() => dispatch({ type: "increase" })}>
//         +
//       </button>

//       <button onClick={() => dispatch({ type: "decrease" })}>
//         -
//       </button>

//       <button onClick={() => dispatch({ type: "reset" })}>
//         Reset
//       </button>

//       <h3>
//         Total Price: ₹{price * state.quantity}
//       </h3>
//     </div>
//   );
// }

// export default App;

import { useSelector, useDispatch } from "react-redux";

import {
  increase,
  decrease,
  reset
} from "./store";

function App() {
  // Get data from Store
  const quantity = useSelector(
    (state) => state.laptop.quantity
  );

  // Send actions
  const dispatch = useDispatch();

  const price = 55000;

  return (
    <div>
      <h1>Laptop Shop</h1>

      <h2>HP Laptop</h2>

      <p>Price: ₹{price}</p>

      <h3>Quantity: {quantity}</h3>

      <button onClick={() => dispatch(increase())}>
        +
      </button>

      <button onClick={() => dispatch(decrease())}>
        -
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

      <h3>
        Total Price: ₹{price * quantity}
      </h3>
    </div>
  );
}

export default App;