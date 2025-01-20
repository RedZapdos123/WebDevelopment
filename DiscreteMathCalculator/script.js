let expressions = "";

//Adds to the Expressions string
function appendToExpression(value){
    expressions += value;
    updateDisplay();
}

//Removes the last inputed character
function removeLastCharacter(){
    expressions = expressions.slice(0, -1);
    updateDisplay();
}

//Clear the expressions string by making it empty
function clearExpression(){
    expressions = "";
    updateDisplay();
    document.getElementById("result").textContent = "";
}

//Updates the display port
function updateDisplay(){
    document.getElementById("display").textContent = expressions || "Enter the Expressions:";
}

//Replace the operators with JavaScript equvalents for evaluation
function preProcessExpression(exp){
    return exp
        .replace(/∧/g, "&&")       
        .replace(/∨/g, "||")   
        .replace(/\⊕/g, "!=")          
        .replace(/¬/g, "!")
        .replace(/(\d)=>/g, "!($1)||")
        .replace(/<=>/g, "===")
        .replace(/\b1\b/g, "true")     
        .replace(/\b0\b/g, "false");   
}

//Evaluate the logical expressions
function calculateExpression(){
    //Try the expression else display an error
    try{
        //Convert the inputed expressions into a valid JavaScript expressions and evaluate it
        const jsExpression = preProcessExpression(expressions);
        const result = new Function(`return ${jsExpression}`)();

        //Display the result
        document.getElementById("result").textContent = `Result: ${result ? "1 (True)" : "0 (False)"}`;
    } 
    catch(error){
        document.getElementById("result").textContent = "Invalid Expression";
    }
}
