import readlineSync from 'readline-sync';
import { getGreeting, getRandomInt, getAnswer } from '../src/index.js';

export default () => {
  const name = getGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let context = {
    count: 0,
    attempts: true,
    name,
  };

  while (context.attempts) {
    context.question = getRandomInt(0, 101);
    console.log(`Question: ${context.question}`);
    context.answer = readlineSync.question('Your answer: ');

    let counter = 0;
    for (let i = 1; i <= context.question; i += 1) {
      if (
        context.question % i === 0
        && i !== 1
        && i !== context.question
      ) {
        counter += 1;
      }
    }

    if (counter > 0) {
      context.correctAnswer = 'no';
    } else {
      context.correctAnswer = 'yes';
    }

    context = getAnswer(context);

    if (context.count === 3) {
      console.log(`Congratulations, ${context.name}!`);
      break;
    }
  }
};
