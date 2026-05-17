let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let humanSelection = '';

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

// rock.style.backgroundColor = "blue";
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
        console.log('You lose! Paper beats Rock');
      } else if (computerChoice == 'scissors') {
        humanScore++;
        console.log('You won! Rock beats Scissors');
      } else {
        console.log('Draw');
      }
    } else if (humanChoice == 'paper') {
      if (computerChoice == 'scissors') {
        computerScore++;
        console.log('You lose! Scissors beats Paper');
      } else if (computerChoice == 'rock') {
        humanScore++;
        console.log('You won! Paper beats Rock');
      } else {
        console.log('Draw');
      }
    } else {
      // scissors case
      if (computerChoice == 'rock') {
        computerScore++;
        console.log('You lose! Rock beats Scissors');
      } else if (computerChoice == 'paper') {
        humanScore++;
        console.log('You won! Scissors beats Paper');
      } else {
        console.log('Draw');
      }
    }
    let message = 'The score is, Human: ' + humanScore + ' Computer: ' + computerScore;
    console.log(message);
  }

  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
