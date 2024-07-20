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
    //Need to add logic to take any upper/lowercase versionf of the choices and convert them to standard "Rock"/"Paper"/"Scissors"

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if ((humanChoice == "Rock") && (computerChoice == "Paper")) {
        alert("You lost. Paper beats Rock.");
        computerScore++;
    } else if((humanChoice == "Rock") && (computerChoice == "Scissors")) {
        alert("You Won! Rock beats Scissors");
        humanScore++;
    } else if((humanChoice == "Rock") && (computerChoice == "Rock")){
        alert("It's a tie. You both chose Rock.")
    } else if((humanChoice == "Paper") && (computerChoice == "Scissors")) {
        alert("You lost. Scissors beats Paper");
        computerScore++;
    } else if((humanChoice == "Paper") && (computerChoice == "Rock")){
        alert("You Won. Paper beats Rock.");
        humanScore++;
    } else if((humanChoice == "Paper") && (computerChoice == "Paper")){
        alert("It's a tie. You both chose Paper.")
    }  else if((humanChoice == "Scissors") && (computerChoice == "Scissors")) {
        alert("It's a tie. You both chose Scissors.");
    } else if((humanChoice == "Scissors") && (computerChoice == "Paper")){
        alert("You Won. Scissors beats paper.");
        humanScore++;
    } else if((humanChoice == "Scissors") && (computerChoice == "Rock")){
        alert("You lost. Rock beats Scissors.")
        computerScore++;
    }
    
}

playRound();