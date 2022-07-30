let playerCount = 0, computerCount = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resetBtn = document.querySelector('#reset');
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
const finalResult = document.getElementById('final-result');

//refresh page for new game
resetBtn.addEventListener('click', () => location.reload());

function computerPlay() {
    let num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (num === 1) {
        return "Rock";
    }
    if (num === 2) {
        return "Paper";
    }
    if (num === 3) {
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {

    }
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {

        playerCount++;
    } else {
        computerCount++;
    }
    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;
    if (playerCount === 5) {
        finalResult.textContent = "YOU WON";
        endGame();

    }
    if (computerCount === 5) {
        finalResult.textContent = "COMPUTER WON";
        endGame();

    }
}
function endGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}


function game() {

    rock.addEventListener('click', () => {
        playRound('rock', computerPlay());

    });
    paper.addEventListener('click', () => {
        playRound('paper', computerPlay());

    });
    scissors.addEventListener('click', () => {
        playRound('scissors', computerPlay());

    });
}

game();