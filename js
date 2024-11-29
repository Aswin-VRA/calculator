let display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
}

function setOperation(op) {
    if (currentInput === "") return; // Don't set operation if no input
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (operator === ""  currentInput === ""  previousInput === "") return;
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error";
            }
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    previousInput = "";
    operator = "";
}
