import readlineSync from 'readline-sync';
import getQuestion from './utils/get-question.js';

export default function playGame(context) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(context.rules);

  while (context.attempts) {
    context.question = getQuestion(context);

    console.log(`Question: ${context.question}`);
    context.answer = readlineSync.question('Your answer: ');
    if (context.answer === context.correctAnswer) {
      context.count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${context.answer}' is wrong answer ;(. Correct answer was '${context.correctAnswer}'.\nLet's try again, ${name}!`);
      context.attempts = false;
    }

    if (context.count === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
}
