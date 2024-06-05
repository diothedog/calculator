let num1;
let num2;
let operator;
let displayValue;

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const over = document.querySelector("#over");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");

zero.addEventListener("click", () => {
    display.textContent = "0";
    displayValue = 0;
});

one.addEventListener("click", () => {
    display.textContent = "1";
    displayValue = 1;
});

two.addEventListener("click", () => {
    display.textContent = "2";
    displayValue = 2;
});

three.addEventListener("click", () => {
    display.textContent = "3";
    displayValue = 3;
});

four.addEventListener("click", () => {
    display.textContent = "4";
    displayValue = 4;
});

five.addEventListener("click", () => {
    display.textContent = "5";
    displayValue = 5;
});

six.addEventListener("click", () => {
    display.textContent = "6";
    displayValue = 6;
});

seven.addEventListener("click", () => {
    display.textContent = "7";
    displayValue = 7;
});

eight.addEventListener("click", () => {
    display.textContent = "8";
    displayValue = 8;
});

nine.addEventListener("click", () => {
    display.textContent = "9";
    displayValue = 9;
});

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

