import getRandomInt from './get-random-int.js';

export default function getPrimeQuestion(context) {
  context.question = getRandomInt(2, 101);

  let isPrime = true;
  for (let i = 2; i <= context.question; i += 1) {
    if (
      context.question % i === 0
    && i !== context.question
    ) {
      isPrime = false;
    }
  }

  context.correctAnswer = isPrime ? 'yes' : 'no';

  return context.question;
}
