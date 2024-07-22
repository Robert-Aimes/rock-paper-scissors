function getComputerChoice(){
    let compChoice = Math.random();
    if (compChoice <= 0.33) {
        return "rock";
    } else if (compChoice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

// Function to handle button clicks
function playRound(event) {
    const buttonType = event.target.className; 
    console.log(`You clicked: ${buttonType}`);
    let computerChoice = getComputerChoice();
    if ((buttonType == "rock") && (computerChoice == "paper")) {
        alert("You lost. Paper beats Rock.");
        computerScore++;
    } else if((buttonType == "rock") && (computerChoice == "scissors")) {
        alert("You Won! Rock beats Scissors");
        humanScore++;
    } else if((buttonType == "rock") && (computerChoice == "rock")){
        alert("It's a tie. You both chose Rock.");
    } else if((buttonType == "paper") && (computerChoice == "scissors")) {
        alert("You lost. Scissors beats Paper.");
        computerScore++;
    } else if((buttonType == "paper") && (computerChoice == "rock")){
        alert("You Won. Paper beats Rock.");
        humanScore++;
    } else if((buttonType == "paper") && (computerChoice == "paper")){
        alert("It's a tie. You both chose Paper.");
    }  else if((buttonType == "scissors") && (computerChoice == "scissors")) {
        alert("It's a tie. You both chose Scissors.");
    } else if((buttonType == "scissors") && (computerChoice == "paper")){
        alert("You Won. Scissors beats Paper.");
        humanScore++;
    } else if((buttonType == "scissors") && (computerChoice == "rock")){
        alert("You lost. Rock beats Scissors.");
        computerScore++;
    }
}

// Add event listeners to each button
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);


/*
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

    alert("Computer: " + computerScore + ". Your Score: " + humanScore);
    
    
}
*/


/*for(let i = 0; i < 5; i++){
    playRound();
    if(i == 4){
        alert("Final Score: \n Computer: " + computerScore + "\n Player: " + humanScore);
    }

}
*/


