import { operate } from "./module.js";
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
btns.addEventListener("click", (event) => {
    switch (event.target.value) {
        case 'res':
            display.textContent = '';
            dot = false;
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
            if (!op) display.textContent += space + event.target.value + space;
            op = "mul";
            dot = false;
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
            if (!op) display.textContent += space + event.target.value + space;
            op = true;
            dot = false;
            break;
        default:
            if (event.target.value != undefined) {
                op = false;
                display.textContent += event.target.value;
            }
    }
});