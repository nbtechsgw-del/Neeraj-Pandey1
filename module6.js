// ============================================================
// MODULE 6: DOM MANIPULATION
// ============================================================

// This module must be connected to an HTML file.

// 1. Select by ID
const title = document.getElementById("title");

if (title) {
    title.innerText = "JavaScript DOM";
}

// 2. querySelector
const paragraph = document.querySelector(".message");

if (paragraph) {
    paragraph.innerText = "Text changed using querySelector";
}

// 3. querySelectorAll
const items = document.querySelectorAll(".item");

items.forEach(function (item) {
    item.style.fontWeight = "bold";
});

// 4. innerHTML
const box = document.getElementById("box");

if (box) {
    box.innerHTML = "<h2>New Heading</h2><p>New paragraph</p>";
}

// 5. Create element
const newParagraph = document.createElement("p");
newParagraph.innerText = "This paragraph was created with JavaScript.";

document.body.appendChild(newParagraph);

// 6. Create button and event
const button = document.createElement("button");
button.innerText = "Click Me";

document.body.appendChild(button);

button.addEventListener("click", function () {
    alert("Button clicked!");
});

// 7. Style
button.style.padding = "10px";
button.style.cursor = "pointer";

// 8. Remove element
const removeButton = document.getElementById("removeButton");

if (removeButton) {
    removeButton.addEventListener("click", function () {
        newParagraph.remove();
    });
}

// 9. Event delegation
const list = document.getElementById("list");

if (list) {
    list.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            console.log("Clicked:", event.target.innerText);
        }
    });
}
