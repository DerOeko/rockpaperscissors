/* Create a function that chooses the stance of the computer.
There are three stances, rock, paper or scissors. 
Randomly assign a position to the computer.
*/
/*
Create function.
Create variable in which I can store the position of the computer.
Randomly assign a number between 1 and 3 to this variable.
Return this variable.
*/
function computerPlay(){
    let randomNumber = 1;
    let computerStance;
    if((randomNumber = Math.floor(Math.random()*3)+1)==1){
        computerStance = "rock";
    }else if((randomNumber = Math.floor(Math.random()*3)+1)==2){
        computerStance = "scissors";
    }else{
        computerStance = "paper";
    };
    return computerStance;
}

/* Create a function.
Asks the user for their input, Rock, Scissor or Paper.
Assigns this input to a variable, that is later compared to the one selected by the computer.*/
function playerSelection(){
    let selection;
    selection = prompt("What stance do you choose?");
    let playerStance = selection.toLowerCase()
    return playerStance;
}


/* Create a function.
Compare playerStance and computerStance and display message, that uses both positions.*/

function displayVictory(){
    
    let playerScore;
    let computerScore;
    if (computerStance == "rock" && playerStance == "scissors"||computerStance== "paper" && playerStance == "rock"){
        return 0;
    }else{
        return 1;
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let computerStance = computerPlay();
    let playerStance = playerSelection();
    for (let i = 0; i<5; i++){
        let result = displayVictory();
        if (result = 0){
            console.log(`Ỳou lose! The computer chose ${computerStance} and you chose ${playerStance}.`);
            computerScore += 1;
        }else if (result = 1){
            console.log(`You win! The computer chose ${computerStance} and you chose ${playerStance}.`);
            playerScore += 1;
        }else{
            console.log(`Stalemate! You both chose ${computerStance}.`)
        }
    }
}