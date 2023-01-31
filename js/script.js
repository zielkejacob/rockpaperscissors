function getComputerChoice(){
    let choice = ["Rock","Paper", "Scissors"]
    return choice[Math.floor(Math.random()*3)]
}

function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection){
        return "tie"
    }
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")){
        return "computer wins"
        }
    else if ((computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "scissors" && playerSelection == "rock")){
        return "you win"
    }
    else {return "invalid entry"}

            
}

let playerSelection = "";
let computerSelection = getComputerChoice();

function game(){
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("rock, paper, or scissors?");
        result = playRound(playerSelection, computerSelection);
        if (result == "tie"){
            i = i-1
            console.log("it was a tie")
        }
        else if(result == "computer wins"){
            computerScore++
            console.log("You lost! The computer's score is", computerScore)
            if(computerScore == 3){console.log("The computer won the best of 5"); break}
            else{}
        }else if(result == "you win"){
            playerScore++
            console.log("You win! Your score is", playerScore)
            if(playerScore == 3){console.log( "You won the best of 5"); break}
            else{}
        }
        else {
            i = i-1;
            console.log("Invalid input. Try again.")
        }
            
        }
    }
    

game();