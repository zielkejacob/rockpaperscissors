let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const pScoreboard = document.querySelector('.pScoreboard');
const cScoreboard = document.querySelector('.cScoreboard');
const results = document.querySelector('.results');
const replayBtn = document.querySelector('.replayBtn');
const rpsBtns = document.querySelectorAll('.rps');

replayBtn.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    pScoreboard.textContent = "Your Score: 0";
    cScoreboard.textContent = "Computer Score: 0";
    results.textContent = "";
    replayBtn.style.visibility = "hidden";
    rpsBtns.forEach((button) => {button.disabled = false});
})


function getComputerChoice(){
    let choice = ["rock","paper", "scissors"]
    return choice[Math.floor(Math.random()*3)]
}

function isGameOver(){
    if (computerScore == 5) {
        results.textContent = "GAME OVER! The computer defeats you." 
        replayBtn.style.visibility = 'visible';
        rpsBtns.forEach((button) => {button.setAttribute('disabled', '')});
        return
    }
    if (playerScore == 5) {
        results.textContent = "YOU WIN! You defeat the computer!"
        replayBtn.style.visibility = 'visible';
        rpsBtns.forEach((button) => {button.setAttribute('disabled', '')});
        return
    }
    else
    return
}


function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice();
    if (computerSelection == playerSelection){
        return results.textContent = 'Tie.'
    }
    else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")){
            computerScore++
            results.textContent = "The computer wins."
            cScoreboard.textContent = `Computer Score: ${computerScore}`;
            isGameOver();
        return 
        }
    else {
        playerScore++;
        results.textContent ="You win!";
        pScoreboard.textContent = `Your Score: ${playerScore}`;
        isGameOver();
        return 

        
    }   
}

const rockbtn = document.querySelector('.rock');
rockbtn.addEventListener('click', () => {
    playerSelection = "rock";

    playRound(playerSelection, computerSelection);
})

const paperbtn = document.querySelector('.paper');
paperbtn.addEventListener('click', () => {
    playerSelection = 'paper';

    playRound(playerSelection, computerSelection);
})
const scissorsbtn = document.querySelector('.scissors');
scissorsbtn.addEventListener('click', () => {
    playerSelection = 'scissors';

    playRound(playerSelection, computerSelection);
})