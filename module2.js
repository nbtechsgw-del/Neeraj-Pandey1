// ============================================================
// MODULE 2: BASICS OF JAVASCRIPT
// ============================================================

// 1. var, let and const
var oldVariable = "var";
let changeableVariable = "let";
const fixedVariable = "const";

changeableVariable = "new value";

console.log(oldVariable);
console.log(changeableVariable);
console.log(fixedVariable);

// 2. Data Types

let stringValue = "Hello";
let numberValue = 100;
let booleanValue = true;
let nullValue = null;
let undefinedValue;
let symbolValue = Symbol("id");
let bigIntValue = 12345678901234567890n;

console.log(typeof stringValue);
console.log(typeof numberValue);
console.log(typeof booleanValue);
console.log(typeof nullValue); // object (JavaScript historical behavior)
console.log(typeof undefinedValue);
console.log(typeof symbolValue);
console.log(typeof bigIntValue);

// 3. Arithmetic operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

// 4. Assignment operators
let x = 10;

x += 5;
console.log("x += 5:", x);

x -= 2;
console.log("x -= 2:", x);

x *= 2;
console.log("x *= 2:", x);

x /= 2;
console.log("x /= 2:", x);

// 5. Comparison operators
console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 != "10");
console.log(10 !== "10");
console.log(10 > 5);
console.log(10 < 20);
console.log(10 >= 10);
console.log(10 <= 10);

// 6. Logical operators
let userAge = 23;
let hasId = true;

console.log(userAge >= 18 && hasId);
console.log(userAge >= 18 || hasId);
console.log(!hasId);
