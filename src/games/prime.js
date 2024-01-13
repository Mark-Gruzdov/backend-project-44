// import readlineSync from 'readline-sync';
import { playGame, getRandomInt } from '../index.js';

export default () => {
  let context = {
    count: 0,
    attempts: true,
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };

  context.question = getRandomInt(0, 101);

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

  playGame(context);
};
