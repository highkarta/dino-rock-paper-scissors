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

function playRound(humanChoice, computerChoice){
  let lowerHumanChoice = humanChoice.toLowerCase();
  console.log(humanScore, computerScore);
  if(lowerHumanChoice == 'rock'){
    if(computerChoice == 'paper'){
      computerScore++;
    }else if(computerChoice == 'scissors'){
      humanScore++;
    }
  }else if(lowerHumanChoice == 'paper'){
    if(computerChoice == 'scissors'){
      computerScore++;
    }else if(computerChoice == 'rock'){
      humanScore++;
    }
  }else{ // scissors case
    if(computerChoice == 'rock'){
      computerScore++;
    }else if(computerChoice == 'paper'){
      humanScore++;
    }
  }
  
  let message = "The score is, Human: " + humanScore + " Computer: " + computerScore;
  console.log(message);
}


function playGame(){
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();

// have to fix, game should run one time, while rounds 5 times