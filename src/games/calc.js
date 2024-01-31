import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function generateGameData() {
  const mathematicalOperations = ['+', '-', '*'];
  const firstValue = getRandomInt(0, 101);
  const secondValue = getRandomInt(0, 101);
  const mathOperation = mathematicalOperations[getRandomInt(0, 2)];

  const question = `${firstValue} ${mathOperation} ${secondValue}`;
  let correctAnswer;

  switch (mathOperation) {
    case '+':
      correctAnswer = String(firstValue + secondValue);
      break;
    case '-':
      correctAnswer = String(firstValue - secondValue);
      break;
    case '*':
      correctAnswer = String(firstValue * secondValue);
      break;
    default:
      break;
  }

  return ([question, correctAnswer]);
}

export default function getCalc() {
  playGame('What is the result of the expression?', generateGameData);
}
