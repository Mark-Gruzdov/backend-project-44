import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function getCorrectAnswer(val1, val2) {
  let firstValue = val1;
  let secondValue = val2;
  while (firstValue !== 0 && secondValue !== 0) {
    if (firstValue > secondValue) {
      firstValue %= secondValue;
    } else {
      secondValue %= firstValue;
    }
  }
  const result = String(firstValue + secondValue);

  return result;
}

function generateGameData() {
  const firstValue = getRandomInt(0, 101);
  const secondValue = getRandomInt(0, 101);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = getCorrectAnswer(firstValue, secondValue);

  return [question, correctAnswer];
}

export default function getGcd() {
  playGame('Find the greatest common divisor of given numbers.', generateGameData);
}
