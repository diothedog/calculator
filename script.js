let num1 = null;
let num2 = null;
let operator1 = null;
let operator2 = null;
let displayValue = "";
let result = null;

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
const equals = document.querySelector("#equals");
const display = document.querySelector("#display");

zero.addEventListener("click", () => {
    displayValue += "0";
    display.textContent = displayValue;
});

one.addEventListener("click", () => {
    displayValue += "1";
    display.textContent = displayValue;
});

two.addEventListener("click", () => {
    displayValue += "2";
    display.textContent = displayValue;
});

three.addEventListener("click", () => {
    displayValue += "3";
    display.textContent = displayValue;
});

four.addEventListener("click", () => {
    displayValue += "4";
    display.textContent = displayValue;
});

five.addEventListener("click", () => {
    displayValue += "5";
    display.textContent = displayValue;
});

six.addEventListener("click", () => {
    displayValue += "6";
    display.textContent = displayValue;
});

seven.addEventListener("click", () => {
    displayValue += "7";
    display.textContent = displayValue;
});

eight.addEventListener("click", () => {
    displayValue += "8";
    display.textContent = displayValue;
});

nine.addEventListener("click", () => {
    displayValue += "9";
    display.textContent = displayValue;
});

clear.addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
    num1 = null;
    num2 = null;
    operator1 = null;
    operator2 = null;
    result = null;
});

equals.addEventListener("click", () => {
    num2 = displayValue;
    if (operator2 === null) {
        result = operate(Number(num1), operator1, Number(num2));
    } else {
        result = operate(Number(num1), operator2, Number(num2));
    }
    displayValue = result;
    operator1 = null;
    operator2 = null;
    if (result.toString().length > 9) {
        display.textContent = result.toString().substring(0, 9);
    } else {
        display.textContent = result;
    }
});

plus.addEventListener("click", () => {
    if (operator1 === null) {
        num1 = displayValue;
        operator1 = "+";
    } else {
        num2 = displayValue;
        result = operate(Number(num1), operator1, Number(num2));
        num1 = result;
        operator2 = "+";
        if (result.toString().length > 9) {
            display.textContent = result.toString().substring(0, 9);
        } else {
            display.textContent = result;
        }
    }
    displayValue = "";
   
});

minus.addEventListener("click", () => {
    if (operator1 === null) {
        num1 = displayValue;
        operator1 = "-";
    } else {
        num2 = displayValue;
        result = operate(Number(num1), operator1, Number(num2));
        num1 = result;
        operator2 = "-";
        if (result.toString().length > 9) {
            display.textContent = result.toString().substring(0, 9);
        } else {
            display.textContent = result;
        }
    }
    displayValue = "";
});

times.addEventListener("click", () => {
    if (operator1 === null) {
        num1 = displayValue;
        operator1 = "*";
    } else {
        num2 = displayValue;
        result = operate(Number(num1), operator1, Number(num2));
        num1 = result;
        operator2 = "*";
        if (result.toString().length > 9) {
            display.textContent = result.toString().substring(0, 9);
        } else {
            display.textContent = result;
        }
    }
    displayValue = "";
});

over.addEventListener("click", () => {
    if (operator1 === null) {
        num1 = displayValue;
        operator1 = "/";
    } else {
        num2 = displayValue;
        result = operate(Number(num1), operator1, Number(num2));
        num1 = result;
        operator2 = "/";
        if (result.toString().length > 9) {
            display.textContent = result.toString().substring(0, 9);
        } else {
            display.textContent = result;
        }
    }
    displayValue = "";
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
    if (b === 0) {
        return "lol :D"
    }
    return a / b;
}

const operate = function(num1, operator1, num2) {
    switch (operator1) {
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

