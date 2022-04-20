//creating array for RPS choices
const RPSOPTIONS = ["rock","paper","scissors"]

function computerPlay () {
// Generate random whole number between 1 and 3 and use to choose from the option array
return (RPSOPTIONS [Math.floor(Math.random() * 3 + 1)])
}

//assign the result from the copmputer play function to computerSelection variable 
let computerSelection = computerPlay()

console.log( "Computer Chose: " + computerSelection);

// prompt user to input rock paper or scissors and create variable
let initialChoice = prompt("Choose your fighter", "Rock, Paper or Scissors?");

//convert user input to be case insensitive
let userChoice = initialChoice.toLowerCase();

//print to check -_-
console.log("You Chose: " + userChoice);

//check to see if input is valid choice from the choice array
if (RPSOPTIONS.indexOf(userChoice) === -1) {
    alert("Enter Valid Choice")
}
//check if misspelled or blank
else if (userChoice == null || userChoice == "") {
   // notify and redo if spelled wrong or blank
    alert("RELOAD AND ENTER A CHOICE")
}

// make function to compare answer to the variable computer choice
function playRound() {

if (userChoice == computerSelection ) {
    return "Its a Tie";
}
else if ( (userChoice == "paper" && computerSelection == "scissors") || (userChoice == "scissors" && computerSelection == "rock") || (userChoice == "rock" && computerSelection == "paper")) {
        return "You Win";
}
else {
    return "You Lose"
}
}




// print computer choice
// print win lose or tie 
// print message
