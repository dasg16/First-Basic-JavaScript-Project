'use strict';
// Logic Below Written By Author DAS
const getRandomValue = () => Math.trunc(Math.random() * 20) + 1;

let randomValue = getRandomValue();
console.log(randomValue);

document.querySelector('.check').addEventListener('click', function () {
  let inputValue = Number(document.querySelector('.guess').value);
  if (inputValue > 0 && inputValue <= 20) {
    if (inputValue === randomValue) {
      document.querySelector('.number').textContent = randomValue;
      document.querySelector('.message').textContent =
        'Congrats! You guessed it right';
      document.querySelector('.message').style.color = '#2a2bab';
      document.querySelector('body').style.backgroundColor = '#5ab347';
    } else {
      if (inputValue > randomValue) {
        document.querySelector('.message').textContent =
          'Number is smaller than you guessed';
      } else if (inputValue < randomValue) {
        document.querySelector('.message').textContent =
          'Number is larger than you guessed';
      }
    }
  } else {
    //Empty input value will also be taken  care here.
    document.querySelector('.message').textContent =
      'Invalid input! You need to enter number only between 1-20.';
  }
});

//Reset Game
document.querySelector('.again').addEventListener('click', function () {
  randomValue = getRandomValue();
  console.log(randomValue);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.highscore').textContent = '0';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.color = '#eee';
});
