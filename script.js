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

const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
let [playerScore , computerScore] = [0, 0];
const player = document.querySelector(".player .number");
const computer = document.querySelector(".computer .number");
const announce = document.querySelector("#score-announce");

let startGame = () => buttons.forEach(button => button.addEventListener("click", function game() {
    const round = playRound(button["id"], computerPlay());
    // update player vs. computer score
    if (round.includes("win")) {
        playerScore += 1;
    }
    else if (round.includes("lose")) {
        computerScore += 1;
    }
    else {playerScore += 1; computerScore += 1}
    player.textContent =  playerScore;
    computer.textContent = computerScore;
    announce.textContent = round;

    // check for game over
    const result = checkScore();
    if (result) {
        announce.textContent = result;
        // lock the scores
        buttons.forEach(button => button.removeEventListener("click", game));
        // add reset button
        const reset = document.createElement('button');
        body.appendChild(reset);
        reset.textContent = "New Game";
        reset.addEventListener("click", () => {
            playerScore = 0;
            computerScore = 0;
            player.textContent = playerScore;
            computer.textContent = computerScore;
            announce.textContent = "";
            startGame();
            body.removeChild(reset);
        })
    }
}));
startGame();

function checkScore() {
    if (playerScore == computerScore == 5) {
        return "It's an overall tie!";
    }
    else if (playerScore == 5) {
        return "You win the contest!";
    }
    else if (computerScore == 5) {
        return "You lose the contest!";
    }
    else {return null}
}