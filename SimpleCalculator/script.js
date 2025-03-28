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
    if (['+', '-', '*', '/'].includes(operator) && display.value !== ''){
        currentOperation = operator;
        display.value += ` ${operator} `;
    }
}

function calculate(){
    try{
        let result = eval(display.value);
        let history = document.querySelector(".history");
        if(history){
            let log = document.createElement("p");
            log.textContent = `→ ${display.value} = ${result}`;
            history.appendChild(log);
        }
        display.value = result;
        currentOperation = '';
    }
    catch(error){
        display.value = 'Error';
    }
}
