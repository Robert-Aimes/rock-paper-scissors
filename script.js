alert("Hello world!")

function getComputerChoice(){
    let choice = Math.random;
    if (choice <=0.33) {
        return "Rock";
    } else if ((choice > 0.33) && (choice <= 0.66)) {
        return "Paper";
    } else {
        return "Scissors";
    }
}  

function getHumanChoice() { 
    let choice = prompt("Please type Rock, Paper or Scissors");
    return choice;

}

console.log(getComputerChoice());
console.log(getHumanChoice());