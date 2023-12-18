import readlineSync from 'readline-sync';
import { getGreeting, getRandomInt, getAnswer } from '../src/index.js';

export default () => {
  const mathematicalOperations = ['+', '-', '*'];
  const name = getGreeting();
  console.log('What is the result of the expression?');
  let context = {
    count: 0,
    attempts: true,
    name,
  };

  while (context.attempts) {
    const firstValue = getRandomInt(0, 101);
    const secondValue = getRandomInt(0, 101);
    const mathOperation = mathematicalOperations[getRandomInt(0, 3)];

    context.question = `${firstValue} ${mathOperation} ${secondValue}`;
    console.log(`Question: ${context.question}`);
    context.answer = readlineSync.question('Your answer: ');
    switch (mathOperation) {
      case '+':
        context.correctAnswer = String(Number(firstValue) + Number(secondValue));
        break;
      case '-':
        context.correctAnswer = String(Number(firstValue) - Number(secondValue));
        break;
      case '*':
        context.correctAnswer = String(Number(firstValue) * Number(secondValue));
        break;
      default:
        break;
    }
    console.log(context.correctAnswer);
    context = getAnswer(context);

    if (context.count === 3) {
      console.log(`Congratulations, ${context.name}!`);
      break;
    }
  }
};
