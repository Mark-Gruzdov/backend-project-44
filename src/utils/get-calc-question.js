import getRandomInt from './get-random-int.js';

export default function getCalcQuestion(context) {
  const mathematicalOperations = ['+', '-', '*'];
  const firstValue = getRandomInt(0, 101);
  const secondValue = getRandomInt(0, 101);
  const mathOperation = mathematicalOperations[getRandomInt(0, 2)];

  context.question = `${firstValue} ${mathOperation} ${secondValue}`;

  switch (mathOperation) {
    case '+':
      context.correctAnswer = String(firstValue + secondValue);
      break;
    case '-':
      context.correctAnswer = String(firstValue - secondValue);
      break;
    case '*':
      context.correctAnswer = String(firstValue * secondValue);
      break;
    default:
      break;
  }

  return context.question;
}
