// ============================================================
// MODULE 10: ASYNCHRONOUS JAVASCRIPT
// ============================================================

// 1. Synchronous
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// 2. Asynchronous
console.log("Async start");

setTimeout(function () {
    console.log("Async operation completed");
}, 2000);

console.log("Async end");

// 3. Callback
function getUser(callback) {
    setTimeout(function () {
        const user = {
            name: "Neeraj",
            age: 23
        };

        callback(user);
    }, 1000);
}

getUser(function (user) {
    console.log("Callback user:", user);
});

// 4. Promise
const myPromise = new Promise(function (resolve, reject) {
    const success = true;

    if (success) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});

myPromise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Promise finished");
    });

// 5. async / await
async function example() {
    try {
        const result = await myPromise;
        console.log("Async/Await:", result);
    } catch (error) {
        console.log("Async error:", error);
    }
}

example();

// 6. fetch API
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();

        console.log("Fetched user:", data);

    } catch (error) {
        console.log("Fetch error:", error.message);
    }
}

getData();
