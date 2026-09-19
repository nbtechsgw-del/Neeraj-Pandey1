// ============================================================
// MODULE 8: ERROR HANDLING & DEBUGGING
// ============================================================

// 1. Syntax error
// Syntax errors happen when JavaScript syntax is incorrect.
// Example:
// console.log("Hello"

// 2. Runtime error
try {
    let student = null;
    console.log(student.name);
} catch (error) {
    console.log("Runtime error:", error.message);
}

// 3. Logical error
let a = 10;
let b = 20;

// Wrong logic example:
// console.log(a - b);

// Correct logic:
console.log("Sum:", a + b);

// 4. try...catch...finally
try {
    let number = 10;

    if (number < 0) {
        throw new Error("Number cannot be negative");
    }

    console.log("Number:", number);

} catch (error) {
    console.log("Caught:", error.message);

} finally {
    console.log("Finally block always executes");
}

// 5. throw
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    return "Allowed";
}

try {
    console.log(checkAge(20));
} catch (error) {
    console.log(error.message);
}

// Debugging
let first = 10;
let second = 20;

console.log("First:", first);
console.log("Second:", second);
console.log("Total:", first + second);

// In browser DevTools:
// console.log()
// console.table()
// debugger
