import readlineSync from 'readline-sync';
import { getGreeting, getRandomInt, getAnswer } from '../index.js';

export default () => {
  const name = getGreeting();
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  let context = {
    count: 0,
    attempts: true,
    name,
    rules,
  };

  while (context.attempts) {
    context.question = getRandomInt(0, 101);
    console.log(`Question: ${context.question}`);
    context.answer = readlineSync.question('Your answer: ');

    if (context.question % 2 === 0) {
      context.correctAnswer = 'yes';
    } else {
      context.correctAnswer = 'no';
    }

    context = getAnswer(context);

    if (context.count === 3) {
      console.log(`Congratulations, ${context.name}!`);
      break;
    }
  }
};
