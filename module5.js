// ============================================================
// MODULE 5: ARRAYS AND OBJECTS
// ============================================================

// ---------------- ARRAYS ----------------

let fruits = ["Apple", "Banana", "Mango"];

console.log("Original:", fruits);

// push - adds at end
fruits.push("Orange");
console.log("push:", fruits);

// pop - removes from end
fruits.pop();
console.log("pop:", fruits);

// unshift - adds at beginning
fruits.unshift("Grapes");
console.log("unshift:", fruits);

// shift - removes from beginning
fruits.shift();
console.log("shift:", fruits);

// slice - copies part of array
let numbers = [10, 20, 30, 40, 50];
console.log("slice:", numbers.slice(1, 4));

// splice - adds/removes array elements
numbers.splice(2, 1, 35);
console.log("splice:", numbers);

// indexOf
console.log("Index of 40:", numbers.indexOf(40));

// forEach
numbers.forEach(function (number) {
    console.log("forEach:", number);
});

// map
let doubled = numbers.map(function (number) {
    return number * 2;
});
console.log("map:", doubled);

// filter
let greaterThan25 = numbers.filter(function (number) {
    return number > 25;
});
console.log("filter:", greaterThan25);

// reduce
let total = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);
console.log("reduce:", total);

// ---------------- OBJECTS ----------------

let student = {
    name: "Neeraj",
    age: 23,
    course: "MCA",

    display: function () {
        console.log("Student:", this.name);
    }
};

console.log(student.name);
console.log(student["course"]);

student.age = 24;
student.city = "Almora";

console.log(student);

// Object method
student.display();

// Destructuring
const { name, course } = student;

console.log("Destructured:", name, course);

// Spread operator
const studentCopy = { ...student };

console.log("Copied object:", studentCopy);

// Rest operator
function showNumbers(...values) {
    console.log("Rest values:", values);
}

showNumbers(10, 20, 30, 40);
