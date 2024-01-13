import getRandomInt from './get-random-int.js';

export default function getEvenQuestion(context) {
  context.question = getRandomInt(0, 101);

  if (context.question % 2 === 0) {
    context.correctAnswer = 'yes';
  } else {
    context.correctAnswer = 'no';
  }

  return context.question;
}
