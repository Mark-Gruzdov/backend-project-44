import getRandomInt from './get-random-int.js';

export default function getGcdQuestion(context) {
  let firstValue = getRandomInt(0, 101);
  let secondValue = getRandomInt(0, 101);

  context.question = `${firstValue} ${secondValue}`;

  while (firstValue !== 0 && secondValue !== 0) {
    if (firstValue > secondValue) {
      firstValue %= secondValue;
    } else {
      secondValue %= firstValue;
    }
  }
  context.correctAnswer = String(firstValue + secondValue);

  return context.question;
}
