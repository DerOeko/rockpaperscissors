function computerPlay(){
    const stances = ["rock", "paper", "scissors"];
    const arrayLength = stances.length;
    const computerSelection = stances[Math.floor(Math.random()*stances.length)];
    return computerSelection;
}

function playerPlay(){
    const playerSelection = prompt("What stance do you choose?").toLowerCase();
    return playerSelection;
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    if(computerSelection === playerSelection){
        displayScore("draw");
        results.textContent = `Draw! The computer chose ${computerSelection} and you chose ${playerSelection}.`;
    }else if(computerSelection !== playerSelection){
        if(computerSelection === "rock" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "rock"){
            displayScore("win");
            results.textContent = `You win! The computer chose ${computerSelection} and you chose ${playerSelection}.`;
        }else{
            displayScore("loose");
            results.textContent = `You loose! The computer chose ${computerSelection} and you chose ${playerSelection}.`;
        }
    }else{
        alert("Error");
    }
}

let playerScore = 0;
let computerScore = 0;

function displayScore(outcome){
        if(outcome === "draw"){
            playerScore += 0;
            computerScore += 0;
            score.textContent = `Your current score is ${playerScore}. The computer's score is ${computerScore}.`;
        }else if(outcome === "win"){
            playerScore += 1;
            score.textContent = `Your current score is ${playerScore}. The computer's score is ${computerScore}.`;
            checkWin(playerScore);
        }else if(outcome === "loose"){
            computerScore += 1;
            score.textContent = `Your current score is ${playerScore}. The computer's score is ${computerScore}.`;
            checkWin(computerScore);
        }
}

function checkWin(number){
    if(playerScore === 5 ||computerScore === 5){
        if(playerScore === 5){
            score.textContent = `You won! Your score is ${playerScore}. The computer's score is ${computerScore}.`;
            playerScore = 0;
            computerScore = 0;
        }else if(computerScore === 5){
            score.textContent = `The computer won... Your score is ${playerScore}. The computer's score is ${computerScore}.`;
            playerScore = 0;
            computerScore = 0;
        }
    }
}

const headline = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

buttons.forEach((button) => {
    button.classList.add("btn");
})

rock.addEventListener("click", () => {
    playRound("rock")
})
paper.addEventListener("click", ()=>{
    playRound("paper");
})
scissors.addEventListener("click", ()=>{
    playRound("scissors");
})


