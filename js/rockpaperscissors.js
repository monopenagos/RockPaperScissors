let computerScore = 0;
let playerScore = 0;
let gameRound = 1;

function getComputerChoice() {
  let ComputerChoiceNumber = Math.floor(Math.random() * 3 + 1);
  return ComputerChoiceNumber;
}

function getPlayerChoice() {
  let playerSelection = false;
  while (!playerSelection) {
    let PlayerChoiceNumber = parseInt(
      prompt("What is your choice?\n1-Rock\n2-Paper\n3-Scissors")
    );
    if (isNaN(PlayerChoiceNumber)) {
      console.log("Please select within the options");
    } else if (PlayerChoiceNumber < 1 || PlayerChoiceNumber > 3) {
      console.log("Please select within the options");
    } else {
      console.clear();
      playerSelection = true;
      return PlayerChoiceNumber;
    }
  }
  // return PlayerChoiceNumber; <-acá no funciona
}

function playRound() {
  const gameOptions = ["Rock", "Paper", "Scissors"];
  let ComputerChoice = getComputerChoice();
  // console.log("Computer ", ComputerChoice);
  let PlayerChoice = getPlayerChoice();
  // console.log("Player ", PlayerChoice);
  console.log("Computer choose", gameOptions[ComputerChoice - 1]);
  console.log("Player choose", gameOptions[PlayerChoice - 1]);
  switch (true) {
    case ComputerChoice == PlayerChoice:
      console.log("It's a draw!!!");
      break;
    case ComputerChoice == 1 && PlayerChoice == 2:
      console.log("You win! Paper beats Rock!");
      playerScore++;
      break;
    case ComputerChoice == 1 && PlayerChoice == 3:
      console.log("You loose! Rock beats Scissors!");
      computerScore++;
      break;
    case ComputerChoice == 2 && PlayerChoice == 1:
      console.log("You loose! Paper beats Rock!");
      computerScore++;
      break;
    case ComputerChoice == 2 && PlayerChoice == 3:
      console.log("You win! Scissors beats Paper!");
      playerScore++;
      break;
    case ComputerChoice == 3 && PlayerChoice == 1:
      console.log("You win! Rock beats Scissor!");
      playerScore++;
      break;
    case ComputerChoice == 3 && PlayerChoice == 2:
      console.log("You loose! Scissors beats Paper!");
      computerScore++;
      break;
  }
}

function game() {
  console.clear();
  for (let i = 0; i < 5; i++) {
    playRound();
    displayScore();
  }
  finalScore();
}

function displayScore() {
  console.log(
    "Round = ",
    gameRound,
    "| Player =",
    playerScore,
    "| Computer =",
    computerScore
  );
  gameRound++;
}

function finalScore() {
  if (computerScore == playerScore) {
    console.log("It's a draw!!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins... you loose!!");
  } else {
    console.log("Player wins!!");
  }
}

game();
