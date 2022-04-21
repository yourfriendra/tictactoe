function game() {

const RPSOPTIONS = ["rock","paper","scissors"]
let initialChoice = prompt("Choose your fighter", "Rock, Paper or Scissors?");

if (initialChoice == null || initialChoice == "") {
     alert("Please reload and enter a valid choice")
 }

let userChoice = initialChoice.toLowerCase();

if (RPSOPTIONS.indexOf(userChoice) === -1) {
    alert("Enter Valid Choice")
}

console.log("You Chose: " + userChoice);

function computerPlay () {
    // Generate random whole number between 1 and 3 and use to choose from the option array
    return (RPSOPTIONS [Math.floor(Math.random() * 3)])
    }
    //assign the result from the copmputer play function to computerSelection variable 
    let computerSelection = computerPlay()
    console.log( "Computer Chose: " + computerSelection);

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

console.log((userChoice) + " VS " + (computerSelection) + " : " + (playRound()))

let winStat = playRound();
return winStat

};

const RECORD = []
for (let i = 0; i < 5; i++) {
    RECORD.push(game())
 }

 function gameStatus () {
 let winRecord = RECORD.filter(countwins)
 function countwins (records){
     return records == "You Win"
 }

 let lossRecord = RECORD.filter(countloss)
 function countloss (records){
     return records == "You Lose"
 }

 let tieRecord = RECORD.filter(counttie)
 function counttie (records){
     return records == "Its a Tie"
 }

let wins = winRecord.length
let losses = lossRecord.length
let ties = tieRecord.length


 if (winRecord.length > lossRecord.length) {
     return (`You won the matches vs the Computer ${wins} to ${losses}! You had ${ties} tied matches.`)
 }
 else if (winRecord.length < lossRecord.length) {
    return (`You lost the matches vs the Computer ${wins} to ${losses}! You had ${ties} tied matches.`)
 }

 else {
    return (`You have tied with the Computer! You had ${ties} tied matches and ${wins} and ${losses}.`)
 }

}
 console.log(gameStatus())
 