import readlineSync from 'readline-sync';
import getQuestion from './utils/get-question.js';

export default function playGame(context) {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!\n${context.rules}`);

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
