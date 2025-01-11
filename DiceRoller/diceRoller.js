//Fetching the elements from the HTML elements
let rollButton = document.getElementById('roll-btn');
let diceDisplay = document.getElementById('dice-display');
let diceNumber = document.getElementById('dice-number');
let dice = document.getElementById('dice');

//The function to generate a random number between 1 and 6.
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//The function to roll multiple dice and display the result
function rollDice() {
    let numberOfDice = diceNumber.value;
    let result = [];

    diceDisplay.innerHTML = '';
    for(let i = 0; i < numberOfDice; i++){
        result.push(rollDie());
    }

    //Displaying the result
    dice.textContent = result.join(", ");
    diceDisplay.appendChild(dice);
}

rollButton.onclick = rollDice;
