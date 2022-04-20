
// Create integer variable for rock
let rock = 1
// Create integer variable for paper
let paper = 2
// Create integer variable for scissors
let scissors = 3

function computerPlay (
// Generate random whole number between 1 and 3 and assign it to variable compChoice
Math.floor(Math.random() * 3 + 1);
)

let computerSelection = computerPlay()

console.log(computerSelection);

// prompt user to input rock paper or scissors and create variable
let userChoice = prompt("Choose your fighter", "Rock, Paper or Scissors?");

//check if misspelled or blank
if (userChoice == null || userChoice == "") {
   // notify and redo if spelled wrong or blank
    console.log("Reload and Enter a Choice");
}

console.log(rock)

console.log(userChoice);
// make rule to compare answer to the variable computer choice


/* if user answer is rock
    computer choice of 1 returns tie or
    computer choice of 2 returns lose or
    computer choice of 3 returns win
*/
//or
/* if user answer is paper
    computer choice of 2 returns tie or
    computer choice of 3 returns lose or
    computer choice of 1 returns win
*/
//or
/* if user answer is scissors
    computer choice of 3 returns tie or
    computer choice of 1 returns lose or
    computer choice of 2 returns win
*/


// print computer choice
// print win lose or tie 
// print message
