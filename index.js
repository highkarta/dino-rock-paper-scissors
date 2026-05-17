let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let humanSelection = '';
let statusInfo = '';

function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return choices[getRandomInt(3)];
}

// Accessing DOM elements
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const status = document.querySelector('#status');
const result = document.querySelector('#result');

rock.addEventListener('click', () => {
  humanSelection = 'rock';
  playGame();
});

paper.addEventListener('click', () => {
  humanSelection = 'paper';
  playGame();
});

scissors.addEventListener('click', () => {
  humanSelection = 'scissors';
  playGame();
});

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
      if (computerChoice == 'paper') {
        computerScore++;
        statusInfo = 'You lose! Paper beats Rock';
      } else if (computerChoice == 'scissors') {
        humanScore++;
        statusInfo = 'You won! Rock beats Scissors';
      } else {
        statusInfo = 'Draw';
      }
    } else if (humanChoice == 'paper') {
      if (computerChoice == 'scissors') {
        computerScore++;
        statusInfo = 'You lose! Scissors beats Paper';
      } else if (computerChoice == 'rock') {
        humanScore++;
        statusInfo = 'You won! Paper beats Rock';
      } else {
        statusInfo = 'Draw';
      }
    } else {
      // scissors case
      if (computerChoice == 'rock') {
        computerScore++;
        statusInfo = 'You lose! Rock beats Scissors';
      } else if (computerChoice == 'paper') {
        humanScore++;
        statusInfo = 'You won! Scissors beats Paper';
      } else {
        statusInfo = 'Draw';
      }
    }
    let resultInfo = 'The score is, You: ' + humanScore + ' Computer: ' + computerScore;
    if(humanScore == 5 || computerScore == 5){
      if(humanScore>computerScore){
        resultInfo = 'You won the game! Press Ctrl + R to play again!';
      }else{
        resultInfo = 'Computer won the game! Press Ctrl + R to play again!';
      }
      // computerScore = 0;
      // humanScore = 0;
    }
    status.innerText = statusInfo;
    result.innerText = resultInfo;
  }

  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

// additionally, add reset button instead of Ctrl + R