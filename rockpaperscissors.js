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

function playRound(){
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if(computerSelection === playerSelection){
        alert(`Draw! The computer chose ${computerSelection} and you chose ${playerSelection}.`);
        return 0;
    }else if(computerSelection !== playerSelection){
        if(computerSelection === "rock" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "rock"){
            alert(`You win! The computer chose ${computerSelection} and you chose ${playerSelection}.`);
            return 1;
        }else{
            alert(`You loose! The computer chose ${computerSelection} and you chose ${playerSelection}.`);
            return 2;
        }
    }else{
        alert("Error");
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i<5; i++){
        let gameOutcome = playRound();

        if(gameOutcome===0){
            continue;
        }else if(gameOutcome===1){
            playerScore += 1;
        }else{
            computerScore += 1;
        }
    }
    console.log(computerScore);
    console.log(playerScore);
}