export function operate(arr) {
    let result = 0;
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