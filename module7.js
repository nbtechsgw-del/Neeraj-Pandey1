// ============================================================
// MODULE 7: JAVASCRIPT IN THE BROWSER
// ============================================================

// 1. Window object
console.log("Window width:", window.innerWidth);
console.log("Window height:", window.innerHeight);

// 2. Document object
console.log("Page title:", document.title);

// 3. setTimeout
const timeoutId = setTimeout(function () {
    console.log("setTimeout executed after 2 seconds");
}, 2000);

// 4. clearTimeout
// clearTimeout(timeoutId);

// 5. setInterval
let count = 1;

const intervalId = setInterval(function () {
    console.log("Interval:", count);

    count++;

    if (count > 5) {
        clearInterval(intervalId);
    }
}, 1000);

// 6. Alert
// alert("Welcome!");

// 7. Prompt
// const name = prompt("Enter your name:");
// console.log(name);

// 8. Confirm
// const result = confirm("Do you want to continue?");
// console.log(result);

// 9. Form handling
const form = document.getElementById("studentForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        console.log("Name:", nameInput.value);
        console.log("Email:", emailInput.value);
    });
}

// 10. Basic validation
function validateName(name) {
    if (name.trim() === "") {
        return false;
    }

    return true;
}

console.log(validateName("Neeraj"));
console.log(validateName(""));
