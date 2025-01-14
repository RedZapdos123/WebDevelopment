let display = document.getElementById('display');
let currentOperation = '';

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
    currentOperation = '';
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function operate(operator){
    if(operator === 'factorial'){
        display.value = factorial(Number(display.value));
        return;
    }
    if(operator === 'root'){
        display.value = Math.sqrt(Number(display.value));
        return;
    }
    currentOperation = operator;
    display.value += ` ${operator} `;
}

function constant(value){
    display.value += eval(value).toFixed(6);
}

function factorial(num){
    if(num < 0)
        return 'Error';
    if(num === 0) 
        return 1;
    return num === 1 ? 1 : num * factorial(num - 1);
}

function calculate(){
    try{
        let [operand1, operator, operand2] = display.value.split(' ');
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);
        let result;

        switch(currentOperation){
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            case '^':
                result = Math.pow(operand1, operand2);
                break;
            case 'root':
                result = Math.sqrt(operand1);
                break;
            case 'log':
                result = Math.log(operand1)/Math.log(operand2);
                break;
            case 'sin':
                result = Math.sin((operand1 * Math.PI)/180);
                break;
            case 'cos':
                result = Math.cos((operand1 * Math.PI)/180);
                break;
            case 'tan':
                result = Math.tan((operand1 * Math.PI)/180);
                break;
            default:
                result = eval(display.value);
                break;
        }
        display.value = result;
        currentOperation = '';
    } catch(error){
        display.value = 'Error';
    }
}
