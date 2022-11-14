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

function getComputerChoice() {
    let randomChoice = (Math.random() * 3)
    randomChoice = Math.floor(randomChoice);
    if (randomChoice == 0) {
        return("rock")
    } else if (randomChoice == 1) {
        return("scissors")
    } else {
        return ("paper")
    }
}

function playRound(playersChoice, computersChoice) {
    computersChoice = getComputerChoice();
    playersChoice = prompt("Please type in you choice..");
    playersChoice = playersChoice.toLowerCase();
    if (playersChoice == computersChoice) {
        console.log("Its a draw, play again!")
        playRound(); //will recurse in testing
    } else if (playersChoice == "rock"){
        if (computersChoice == "paper") {
            console.log("You loose paper beat rock!");
            return("loss");
        }else {
            console.log("You win rock beat scissors!");
            return("win");
        }
    } else if (playersChoice == "paper"){
        if (computersChoice == "scissors") {
            console.log("You loose scissors beat paper");
            return("loss");
        }else {
            console.log("You win paper beat rock")
            return("win");
        }
    } else if (playersChoice == "scissors"){
        if (computersChoice == "rock") {
            console.log("You loose rock beat scissors");
            return("loss");
        }else {
            console.log("You win scissors beat paper");
            return("win");
        }
    }
}

function playGame() {
    let playerWinCounter = 0
    let computerWinCounter = 0
    for (let i = 0; i < 5; i++) {
        if (playRound() == "win") {
            playerWinCounter += 1
        } else {
            computerWinCounter +=1
        }
    }
    console.log(playerWinCounter);
    console.log(computerWinCounter);
}

playGame();
