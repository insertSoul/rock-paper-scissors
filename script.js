// create a message explaining rules 
//(going to be all done in console)

// ######## Function for 1 turn ##########

// Get input of user (rock paper scissors)

//      Remove case sensitivity problems
// Store user inputs in variable

// Generate the computers move and store as a variable (random number 1=R, 2=P 3=S ????)
// ^^ make it a seperate function

// Compare user and Computers moves to determine winner (using if else statments)
//      if computer == user => draw (need to display draw and recall function)
//      if user(Rock) computer(Paper) => lose
//      if user(rock) computer(scissors) => win
//      .......etc
// Return the result (win/loss)

// ############ Function for whole game #########
// Should be best of 5 
// Loop through the turn function 5 times 
// Create a counter(s) to store win and losses
// Make sure function does exit after
//let guessInput = document.getElementById(guessInput);

function getComputerChoice() {
    let randomChoice = (Math.random() * 3)
    randomChoice = Math.floor(randomChoice);
    if (randomChoice == 0) {
        return("Rock")
    } else if (randomChoice == 1) {
        return("Scissors")
    } else {
        return ("Paper")
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

