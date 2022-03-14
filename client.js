const btns = document.querySelector(".compound-btns-container");
const display = document.querySelector(".display");
let op = false;
let dot = false;
const space = " ";
const dotFunc = () => {
    if (!dot) {
        display.textContent += '.';
        dot = true
    }
}

function operate(arr) {
    let result = 0;
    if (arr[0] === '') {
        if (arr[1] == '+' || arr[1] == '-') {
            arr.shift();
            temp = arr[0];
            arr.shift();
            arr[0] = temp + arr[0];
        }
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+") {
            if (i == 1) {
                result = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
            } else {
                result += parseFloat(arr[i + 1])
            }
        } else if (arr[i] == "-") {
            if (i == 1) {
                result = parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]);
            } else {
                result -= parseFloat(arr[i + 1])
            }
        } else if (arr[i] == "*") {
            if (i == 1) {
                result = parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]);
            } else {
                result *= parseFloat(arr[i + 1])
            }
        } else if (arr[i] == "/") {
            if (arr[i + 1] == 0) {
                alert("You can't divide by zero");
            }
            if (i == 1) {
                result = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]);
            } else {
                result /= parseFloat(arr[i + 1])
            }
        }
    }
    return result
}
btns.addEventListener("click", (event) => {
    switch (event.target.value) {
        case 'res':
            display.textContent = '';
            dot = false;
            op = false;
            break;
        case 'del':
            display.textContent = display.textContent.slice(0, -1);
            break;
        case '=':
            let arr = display.textContent.split(' ');
            display.textContent = "" + operate(arr);
            dot = false;
            break;
        case '*':
            if (display.textContent != "") {
                if (!op) display.textContent += space + event.target.value + space;
                op = "mul";
                dot = false;
            }

            break;
        case '-':
            dot = false;
            if (!op) {
                display.textContent += space + event.target.value + space;
                op = true;
            } else if (op === 'mul') {
                display.textContent += event.target.value;
            }
        case '+':
        case '/':
            if (display.textContent != '') {
                if (!op) display.textContent += space + event.target.value + space;
                op = true;
                dot = false;
            }

            break;
        default:
            if (event.target.value != undefined) {
                op = false;
                display.textContent += event.target.value;
            }
    }
});