function computerPlay() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random()*moves.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors"
        }
        else {
            return "You lose! Paper beats Rock"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock"
        }
        else {
            return "You lose! Scissors beats Paper"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats Paper"
        }
        else {
            return "You lose! Rock beats Scissors"
        }
    }
    else {
        return "Invalid move."
    }
}

function game(){
    let Player = 0;
    let CPU = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(prompt("Make your move:"), computerPlay());
        if (round.includes("win")) {
            Player += 1;
        }
        else {
            CPU += 1;
        }
        console.log(round)

    }
    if (Player > CPU) {
        console.log("You win " + Player + " to " + CPU);
    }
    else if (Player == CPU) {
        console.log("It's an overall tie!");
    }
    else {
        console.log("You lose " + Player + " to " + CPU);
    }
}