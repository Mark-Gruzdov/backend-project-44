import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function isPrime(number) {
  const count = Math.sqrt(number);
  for (let i = 0; i < count; i += 1) {
    if (
      number === 1
      || (number % i === 0 && i !== 1)
    ) {
      return false;
    }
  }

  return true;
}

function generateGameData() {
  const question = getRandomInt(1, 101);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
}

export default function getPrime() {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateGameData);
}
