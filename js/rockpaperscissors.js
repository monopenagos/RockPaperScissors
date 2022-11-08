function getComputerChoice() {
  let ComputerChoice;
  let ComputerChoiceNumber = Math.floor(Math.random() * 3 + 1);
  console.log(ComputerChoiceNumber);
  switch (ComputerChoiceNumber) {
    case 1:
      ComputerChoice = "Rock";
      break;
    case 2:
      ComputerChoice = "Paper";
      break;
    case 3:
      ComputerChoice = "Scissors";
      break;
  }
  return ComputerChoice;
  //   return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice());
