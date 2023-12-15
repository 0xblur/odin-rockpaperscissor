// Rock, paper, scissors
// =====================
// This game is played exclusively in the console.

let game = function(rounds) {
  // [DONE]
  console.log(`We're going to play ${rounds} rounds!!! Let's GO.`)
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;


  while (roundsPlayed < rounds) {
    let roundResult;

    roundResult = playRound()

    if (roundResult === 1) {
      computerScore++
      roundsPlayed++
      console.log("Computer Wins Round !")
      console.log(`PLAYER [${playerScore}] - [${computerScore}] COMPUTER`)
    } else if (roundResult === undefined) {
      console.log("It's a tie! Playing a new round.")
      console.log(`PLAYER [${playerScore}] - [${computerScore}] COMPUTER`)
    } else if (roundResult === 0) {
      playerScore++
      roundsPlayed++
      console.log("Player Wins!")
      console.log(`PLAYER [${playerScore}] - [${computerScore}] COMPUTER`)
    };

    if ((playerScore > rounds / 2) || (computerScore > rounds / 2)) {
      break;
    };
  }

  if (playerScore > computerScore) {
    console.log("Player Wins the Game!")
  } else {
    console.log("Computer Wins the Game!")
  };
}

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

let playRound = function(computerSelection = getComputerChoice()) {
  // [DONE]
  // Variable initialization.
  let playerSelection;
  let computerWin;

  // Prompting the user player.
  playerSelection = prompt('Type "rock", "paper", or "scissors"');

  if (typeof playerSelection === "string") {
    playerSelection = playerSelection.toLowerCase();
  } else {
    console.log("The user made a wrong selection. Try again!")
  };

  if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
    computerWin = 1;
  } else if (computerSelection === playerSelection) {
    computerWin = undefined;
  } else {
    computerWin = 0;
  };

  return computerWin
}


