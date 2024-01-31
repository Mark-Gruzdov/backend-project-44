import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function generateGameData() {
  const question = getRandomInt(2, 101);

  let isPrime = true;
  for (let i = 2; i <= question; i += 1) {
    if (
      question % i === 0
    && i !== question
    ) {
      isPrime = false;
    }
  }

  const correctAnswer = isPrime ? 'yes' : 'no';

  return ([question, correctAnswer]);
}

export default function getPrime() {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateGameData);
}
