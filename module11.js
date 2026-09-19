// ============================================================
// MODULE 11: LOCAL STORAGE & SESSION STORAGE
// ============================================================

// This module should be run in a browser.

// 1. localStorage set
localStorage.setItem("name", "Neeraj");
localStorage.setItem("course", "MCA");

// 2. localStorage get
const name = localStorage.getItem("name");
const course = localStorage.getItem("course");

console.log("Name:", name);
console.log("Course:", course);

// 3. JSON object storage
const student = {
    name: "Neeraj",
    age: 23,
    course: "MCA"
};

localStorage.setItem("student", JSON.stringify(student));

// 4. JSON retrieval
const storedStudent = JSON.parse(
    localStorage.getItem("student")
);

console.log("Stored student:", storedStudent);

// 5. Check whether key exists
console.log(localStorage.getItem("name") !== null);

// 6. Remove one item
// localStorage.removeItem("course");

// 7. Clear all localStorage
// localStorage.clear();

// 8. sessionStorage
sessionStorage.setItem("loginStatus", "loggedIn");

console.log(
    "Session:",
    sessionStorage.getItem("loginStatus")
);

// sessionStorage.removeItem("loginStatus");
// sessionStorage.clear();
