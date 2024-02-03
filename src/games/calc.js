import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function getCorrectAnswer(firstValue, mathOperation, secondValue) {
  let result = 0;
  switch (mathOperation) {
    case '+':
      result = String(firstValue + secondValue);
      break;
    case '-':
      result = String(firstValue - secondValue);
      break;
    case '*':
      result = String(firstValue * secondValue);
      break;
    default:
      break;
  }

  return result;
}

function generateGameData() {
  const mathematicalOperations = ['+', '-', '*'];
  const firstValue = getRandomInt(0, 101);
  const secondValue = getRandomInt(0, 101);
  const mathOperation = mathematicalOperations[getRandomInt(0, mathematicalOperations.length - 1)];
  const question = `${firstValue} ${mathOperation} ${secondValue}`;
  const correctAnswer = getCorrectAnswer(firstValue, mathOperation, secondValue);

  return [question, correctAnswer];
}

export default function getCalc() {
  playGame('What is the result of the expression?', generateGameData);
}
