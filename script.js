alert("Hello world!")

function getComputerChoice(){
    let compChoice = Math.random;
    if (compChoice <=0.33) {
        return "Rock";
    } else if ((compChoice > 0.33) && (compChoice <= 0.66)) {
        return "Paper";
    } else {
        return "Scissors";
    }
}  

function getHumanChoice() { 
    let humanChoice = prompt("Please type Rock, Paper or Scissors");
    return humanChoice;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
}

console.log(getComputerChoice());
console.log(getHumanChoice());