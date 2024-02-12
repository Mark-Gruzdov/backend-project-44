import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function gcd(val1, val2) {
  if (val2 === 0) {
    return val1;
  }
  return gcd(val2, val1 % val2);
}

function generateGameData() {
  const firstValue = getRandomInt(0, 101);
  const secondValue = getRandomInt(0, 101);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = gcd(firstValue, secondValue);
  console.log(`correctAnswer >>> ${correctAnswer}`);

  return [question, correctAnswer];
}

export default function getGcd() {
  playGame('Find the greatest common divisor of given numbers.', generateGameData);
}
