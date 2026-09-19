// ============================================================
// MODULE 3: CONTROL FLOW
// ============================================================

// 1. if
let age = 20;

if (age >= 18) {
    console.log("Adult");
}

// 2. if else
let number = 10;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3. else if
let marks = 75;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// 4. switch
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// 5. for loop
for (let i = 1; i <= 5; i++) {
    console.log("For:", i);
}

// 6. while loop
let i = 1;

while (i <= 5) {
    console.log("While:", i);
    i++;
}

// 7. do while
let j = 1;

do {
    console.log("Do While:", j);
    j++;
} while (j <= 3);

// 8. break
for (let k = 1; k <= 10; k++) {
    if (k === 6) {
        break;
    }
    console.log("Break:", k);
}

// 9. continue
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        continue;
    }
    console.log("Continue:", k);
}

// 10. Truthy and falsy
let value = "";

if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Common falsy values:
// false, 0, "", null, undefined, NaN
