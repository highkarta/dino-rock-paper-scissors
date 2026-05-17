let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return choices[getRandomInt(3)];
}

function getHumanChoice(){
  return prompt("Enter your choice: Rock, Paper or Scissors?");
}

function playGame(){
  function playRound(humanChoice, computerChoice){
    let lowerHumanChoice = humanChoice.toLowerCase();
    if(lowerHumanChoice == 'rock'){
      if(computerChoice == 'paper'){
        computerScore++;
        console.log("You lose! Paper beats Rock");
      }else if(computerChoice == 'scissors'){
        humanScore++;
        console.log("You won! Rock beats Scissors");
      }else{
        console.log("Draw");
      }
    }else if(lowerHumanChoice == 'paper'){
      if(computerChoice == 'scissors'){
        computerScore++;
        console.log("You lose! Scissors beats Paper");
      }else if(computerChoice == 'rock'){
        humanScore++;
        console.log("You won! Paper beats Rock");
      }else{
        console.log("Draw");
      }
    }else{ // scissors case
      if(computerChoice == 'rock'){
        computerScore++;
        console.log("You lose! Rock beats Scissors");
      }else if(computerChoice == 'paper'){
        humanScore++;
        console.log("You won! Scissors beats Paper");
      }else{
        console.log("Draw");
      }
    }
    let message = "The score is, Human: " + humanScore + " Computer: " + computerScore;
    console.log(message);
  }
  
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();
