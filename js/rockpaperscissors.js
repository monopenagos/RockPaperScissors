function getComputerChoice() {
  // let ComputerChoice;
  let ComputerChoiceNumber = Math.floor(Math.random() * 3 + 1);
  // console.log("computer ", ComputerChoiceNumber);
  // switch (ComputerChoiceNumber) {
  //   case 1:
  //     ComputerChoice = "Rock";
  //     break;
  //   case 2:
  //     ComputerChoice = "Paper";
  //     break;
  //   case 3:
  //     ComputerChoice = "Scissors";
  //     break;
  // }
  return ComputerChoiceNumber;
}

function getPlayerChoice() {
  // let PlayerChoice;
  let PlayerChoiceNumber = parseInt(
    prompt("What is your choice?\n1-Rock\n2-Paper\n3-Scissors")
  );
  // switch (PlayerChoiceNumber) {
  //   case 1:
  //     PlayerChoice = "Rock";
  //     break;
  //   case 2:
  //     PlayerChoice = "Paper";
  //     break;
  //   case 3:
  //     PlayerChoice = "Scissors";
  //     break;
  // }
  // console.log("player ", PlayerChoiceNumber);
  return PlayerChoiceNumber;
}

function playRound() {
  const gameOptions = ["Rock", "Paper", "Scissors"];
  let ComputerChoice = getComputerChoice();
  console.log("player ", ComputerChoice);
  let PlayerChoice = getPlayerChoice();
  console.log("player ", PlayerChoice);
  console.log("Computer choose", gameOptions[ComputerChoice - 1]);
  console.log("Player choose", gameOptions[PlayerChoice - 1]);
  switch (true) {
    case ComputerChoice == PlayerChoice:
      console.log("It's a draw!!!");
      break;
    case ComputerChoice == 1 && PlayerChoice == 2:
      console.log("You win! Rock beats Paper!");
      break;
    case ComputerChoice == 1 && PlayerChoice == 3:
      console.log("You loose! Rock beats Scissors!");
      break;
    case ComputerChoice == 2 && PlayerChoice == 1:
      console.log("You loose! Paper beats Rock!");
      break;
    case ComputerChoice == 2 && PlayerChoice == 3:
      console.log("You win! Scissors beats Paper!");
      break;
    case ComputerChoice == 3 && PlayerChoice == 1:
      console.log("You win! Scissors beats Rock!");
      break;
    case ComputerChoice == 3 && PlayerChoice == 2:
      console.log("You loose! Scissors beats Paper!");
      break;
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

game();

// getPlayerChoice();

// console.log(getComputerChoice());
