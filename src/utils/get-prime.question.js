import getRandomInt from './get-random-int.js';

export default function getPrimeQuestion(context) {
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

  return context.question;
}
