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
    else {
        if (computerSelection == "paper") {
            return "You win! Scissors beats Paper"
        }
        else {
            return "You lose! Rock beats Scissors"
        }
    }
}