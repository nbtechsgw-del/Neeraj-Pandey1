const display = document.getElementById("display");


// Add value to display
function addToDisplay(value) {

    display.value += value;
}


// Clear display
function clearDisplay() {

    display.value = "";
}


// Delete last character
function deleteNumber() {

    display.value = display.value.slice(0, -1);
}


// Calculate result
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        let expression = display.value;

        // Convert percentage
        expression = expression.replace(
            /(\d+(\.\d+)?)%/g,
            "($1/100)"
        );

        display.value = eval(expression);

    } catch (error) {

        display.value = "Error";

    }
}