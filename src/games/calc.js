import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

const mathematicalOperations = ['+', '-', '*'];

function getCorrectAnswer(firstValue, secondValue, mathOperation) {
  switch (mathOperation) {
    case '+':
      return (firstValue + secondValue);
    case '-':
      return (firstValue - secondValue);
    case '*':
      return (firstValue * secondValue);
    default:
      throw new Error(`operation ${mathOperation} is not supported`);
  }
}

function generateGameData() {
  const firstValue = getRandomInt(0, 101);
  const secondValue = getRandomInt(0, 101);
  const mathOperation = mathematicalOperations[getRandomInt(0, mathematicalOperations.length - 1)];
  const question = `${firstValue} ${mathOperation} ${secondValue}`;
  const correctAnswer = getCorrectAnswer(firstValue, secondValue, mathOperation);

  return [question, correctAnswer];
}

export default function getCalc() {
  playGame('What is the result of the expression?', generateGameData);
}
