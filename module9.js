// ============================================================
// MODULE 9: ES6+ FEATURES
// ============================================================

// 1. let, const, var
var oldName = "Old";
let currentName = "Neeraj";
const country = "India";

console.log(oldName, currentName, country);

// 2. Template literals
console.log(`My name is ${currentName} and I live in ${country}.`);

// 3. Arrow functions
const add = (a, b) => a + b;
console.log(add(10, 20));

// 4. Destructuring array
const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// 5. Destructuring object
const student = {
    name: "Neeraj",
    age: 23,
    course: "MCA"
};

const { name, age, course } = student;

console.log(name, age, course);

// 6. Spread
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers);

// 7. Rest
function total(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log("Total:", total(10, 20, 30));

// 8. Default parameters
function greet(name = "Student") {
    console.log(`Hello ${name}`);
}

greet();
greet("Neeraj");

// 9. Modules
// In a real ES module project:
// export function add(a, b) { return a + b; }
// import { add } from "./math.js";
//
// HTML:
// <script type="module" src="app.js"></script>
