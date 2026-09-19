// ============================================================
// MODULE 4: FUNCTIONS
// ============================================================

// 1. Function declaration
function greet() {
    console.log("Hello JavaScript");
}

greet();

// 2. Parameters
function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));

// 3. Return value
function square(number) {
    return number * number;
}

let result = square(5);
console.log("Square:", result);

// 4. Function expression
const subtract = function (a, b) {
    return a - b;
};

console.log("Subtraction:", subtract(20, 5));

// 5. Arrow function
const multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));

// Short arrow function
const cube = number => number * number * number;

console.log("Cube:", cube(3));

// 6. Callback function
function calculate(a, b, operation) {
    return operation(a, b);
}

function addNumbers(a, b) {
    return a + b;
}

console.log("Callback result:", calculate(10, 20, addNumbers));

// Callback with arrow function
console.log(
    "Callback arrow:",
    calculate(10, 5, (a, b) => a * b)
);

// 7. IIFE
(function () {
    console.log("IIFE executed immediately");
})();

// IIFE with parameters
(function (name) {
    console.log("Welcome", name);
})("Neeraj");
