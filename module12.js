// ============================================================
// MODULE 12: JAVASCRIPT BEST PRACTICES
// ============================================================

// 1. Use const when value does not change
const studentName = "Neeraj";

// 2. Use let when value changes
let studentMarks = 80;

studentMarks = 85;

// 3. Meaningful names
const maximumMarks = 100;
const passingMarks = 40;

// 4. Small reusable functions
function calculatePercentage(marks, maximum) {
    return (marks / maximum) * 100;
}

function getResult(marks) {
    if (marks >= passingMarks) {
        return "Pass";
    }

    return "Fail";
}

// 5. DRY - Don't Repeat Yourself
function displayStudent(name, marks) {
    const percentage = calculatePercentage(
        marks,
        maximumMarks
    );

    const result = getResult(marks);

    console.log("Name:", name);
    console.log("Marks:", marks);
    console.log("Percentage:", percentage + "%");
    console.log("Result:", result);
}

displayStudent(studentName, studentMarks);

// 6. Readable array code
const numbers = [10, 20, 30, 40, 50];

const doubledNumbers = numbers.map(number => number * 2);

console.log("Doubled:", doubledNumbers);

// 7. Avoid unnecessary global variables.
// 8. Use comments for useful explanations.
// 9. Keep functions focused on one task.
// 10. ESLint can be used to detect common coding problems.
