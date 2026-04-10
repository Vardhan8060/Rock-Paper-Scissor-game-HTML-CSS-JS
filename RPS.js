let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

function playGame(playerMove) {
  const computerMove = pickcomputerMove();
  let result = '';


  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'Lose.';
    } else if (computerMove === 'scissors') {
      result = 'Win.';
    }
 

  } else if (playerMove === 'paper') {
    if (computerMove === 'Rock') {
      result = 'Win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'Lose.';
    }

  } else  if (playerMove === 'scissors') {
    if (computerMove === 'Rock') {
      result = 'Lose.';
    } else if (computerMove === 'paper') {
      result = 'Win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  // Update score
  if (result === 'Win.') {
    score.wins += 1;
  } else if (result === 'Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  // Display result
  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `
    you
    <img src="images/${playerMove}-emoji.png" class="img">
    <img src="images/${computerMove}-emoji.png" class="img">
    computer
  `;
}

function updateScore() {
  document.querySelector('.js-score').innerHTML = `
    wins: ${score.wins}, 
    losses: ${score.losses}, 
    ties: ${score.ties}
  `;
}

function pickcomputerMove() {
  const mathRandom = Math.random();
  let computerMove = '';

  if (mathRandom >= 0 && mathRandom <= 1 / 3) {
    computerMove = 'Rock';
  } else if (mathRandom > 1 / 3 && mathRandom <= 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}
