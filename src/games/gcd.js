import readlineSync from 'readline-sync';
import { getGreeting, getRandomInt, getAnswer } from '../index.js';

export default () => {
  const name = getGreeting();
  const rules = 'Find the greatest common divisor of given numbers.';
  let context = {
    count: 0,
    attempts: true,
    name,
    rules,
  };

  while (context.attempts) {
    let firstValue = getRandomInt(0, 101);
    let secondValue = getRandomInt(0, 101);

    context.question = `${firstValue} ${secondValue}`;
    console.log(`Question: ${context.question}`);
    context.answer = readlineSync.question('Your answer: ');

    while (firstValue !== 0 && secondValue !== 0) {
      if (firstValue > secondValue) {
        firstValue %= secondValue;
      } else {
        secondValue %= firstValue;
      }
    }
    context.correctAnswer = String(firstValue + secondValue);

    context = getAnswer(context);

    if (context.count === 3) {
      console.log(`Congratulations, ${context.name}!`);
      break;
    }
  }
};
