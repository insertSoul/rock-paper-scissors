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
    const output = document.querySelector('.output');
    if (playersChoice == computersChoice) {
        output.textContent = "Its a draw, play again!"
        return playRound();
    } else if (playersChoice == "rock"){
        if (computersChoice == "paper") {
         output.textContent = "You loose paper beat rock!";
            return scoreCounter(0,1);
        }else {
         output.textContent = "You win rock beat scissors!";
            return scoreCounter(1,0);
        }
    } else if (playersChoice == "paper"){
        if (computersChoice == "scissors") {
         output.textContent = "You loose scissors beat paper";
            return scoreCounter(0,1);
        }else {
         output.textContent = "You win paper beat rock"
            return scoreCounter(1,0);
        }
    } else if (playersChoice == "scissors"){
        if (computersChoice == "rock") {
         output.textContent = "You loose rock beat scissors";
            return scoreCounter(0,1);
        }else {
         output.textContent = "You win scissors beat paper";
            return scoreCounter(1,0);
        }
    }
};

let totalPlayerScore = 0
let totalComputerScore = 0
function scoreCounter(playerScore, computerScore) {
    if (playerScore == 1) {
        totalPlayerScore += 1;
        console.log(`ur score = ${totalPlayerScore}`);
    }
    if (computerScore == 1) {
        totalComputerScore += 1;
        console.log(`computers score = ${totalComputerScore}`);
    }
};


const rockButton = document.querySelector('.rockButton');
rockButton.addEventListener('click', () => {
    playRound('rock', '')
});

const paperButton = document.querySelector('.paperButton');
paperButton.addEventListener('click', () => {
    playRound('paper', '')
});

const scissorsButton = document.querySelector('.scissorsButton');
scissorsButton.addEventListener('click', () => {
    playRound('scissors', '')
});


                ///###### pseudo code for building ######## //////

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



/*
function playGame() {
    let playerWinCounter = 0;
    let computerWinCounter = 0;
    for (let i = 0; i < 5; i++) {
        if (playRound() === true) {
            playerWinCounter += 1;
        } else {
            computerWinCounter += 1;
        }
        if (playerWinCounter >=3 || computerWinCounter >=3) {
            break
        }
    }
    
    if (playerWinCounter >= 3) {
        console.log("Well done you beat the computer");
    } else  {
        console.log("Better luck next time, the computer won");
    }
    console.log(`\nThe final scores are:\n You:${playerWinCounter} \n Computer:${computerWinCounter} `);
}

*/
