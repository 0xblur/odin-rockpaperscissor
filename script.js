// Rock, paper, scissors
// =====================
// This game is played exclusively in the console.

const actionBtns = document.querySelectorAll(".action-btn")
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
// Create winner message. I do this here and not in the HTML just for fun.
let winner = document.createElement("p");
winner.style.color = "red";
winner.style.fontSize = "150%";
winner.style.fontWeight = "bold";
// document.addEventListener("click", () => {
//   document.querySelector("#player-score p").textContent = String(playerScore);
//   document.querySelector("#computer-score p").textContent = String(computerScore);
// })

let getComputerChoice = function() {
  // [DONE]
  const choices = ["rock", "paper", "scissors"];

  function getRandomChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const randomChoice = getRandomChoice(choices);

  return randomChoice
}

function playRound(computerSelection = getComputerChoice()) {
  winner.textContent = "";

  if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
    computerScore++;
    document.querySelector("#msg").textContent = `${playerSelection} loses against ${computerSelection}. Computer++!`;
    refreshScore();
  } else if (computerSelection === playerSelection) {
    document.querySelector("#msg").textContent = `${playerSelection} and ${computerSelection}. It's a tie!`;
  } else {
    playerScore++;
    document.querySelector("#msg").textContent = `${playerSelection} wins against ${computerSelection}. Player++!`;
    refreshScore();
  };

  if (playerScore === 5) {
    winner.textContent = "Player wins the game!";
    document.querySelector("#msg").after(winner);
    refreshGame();
  } else if (computerScore === 5) {
    winner.textContent = "Computer wins the game!";
    document.querySelector("#msg").after(winner);
    refreshGame();
  }
}

function refreshScore() {
  document.querySelector("#player-score p").textContent = String(playerScore);
  document.querySelector("#computer-score p").textContent = String(computerScore);
}

function refreshGame() {
  playerScore = 0;
  computerScore = 0;
};

actionBtns.forEach(btn => btn.addEventListener('click', () => playerSelection = btn.value))
actionBtns.forEach(btn => btn.addEventListener('click', () => playRound()))
