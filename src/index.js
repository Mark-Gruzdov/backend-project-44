import readlineSync from 'readline-sync';
import getCalcQuestion from './utils/get-calc-question.js';
import getEvenQuestion from './utils/get-even-question.js';
import getGcdQuestion from './utils/get-gcd-question.js';
import getProgressionQuestion from './utils/get-progression-question.js';
import getPrimeQuestion from './utils/get-prime.question.js';

export default function playGame(context) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(context.rules);

  while (context.attempts) {
    switch (context.title) {
      case 'brain-calc':
        context.question = getCalcQuestion(context);
        break;
      case 'brain-even':
        context.question = getEvenQuestion(context);
        break;
      case 'brain-gcd':
        context.question = getGcdQuestion(context);
        break;
      case 'brain-progression':
        context.question = getProgressionQuestion(context);
        break;
      case 'brain-prime':
        context.question = getPrimeQuestion(context);
        break;
      default:
        break;
    }

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
