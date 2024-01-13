import getCalcQuestion from './get-calc-question.js';
import getEvenQuestion from './get-even-question.js';
import getGcdQuestion from './get-gcd-question.js';
import getProgressionQuestion from './get-progression-question.js';
import getPrimeQuestion from './get-prime.question.js';

export default function getQuestion(context) {
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

  return context.question;
}
