import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function generateGameData() {
  let firstValue = getRandomInt(0, 101);
  let secondValue = getRandomInt(0, 101);

  const question = `${firstValue} ${secondValue}`;

  while (firstValue !== 0 && secondValue !== 0) {
    if (firstValue > secondValue) {
      firstValue %= secondValue;
    } else {
      secondValue %= firstValue;
    }
  }
  const correctAnswer = String(firstValue + secondValue);

  return ([question, correctAnswer]);
}

export default function getGcd() {
  playGame('Find the greatest common divisor of given numbers.', generateGameData);
}
