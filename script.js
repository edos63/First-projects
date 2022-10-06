'use strict';

let secretNumder = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessege = function () {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function verify() {
  const quessNumber = Number(document.querySelector('.number-input').value);

  //не ввел число
  if (!quessNumber) {
    displayGuessMessege('Введите число!');

    //угадали
  } else if (quessNumber === secretNumder) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('.question').textContent = secretNumder;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    let highscore = (document.querySelector('.highscore').textContent = score);
  } else if (quessNumber !== secretNumder) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        quessNumber > secretNumder ? 'Много!' : 'Мало';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessege('Вы проебали!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumder = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
  }
});
