import readlineSync from 'readline-sync';
import { getGreeting, getRandomInt, getAnswer } from '../index.js';

export default () => {
  const name = getGreeting();
  const rules = 'What number is missing in the progression?';
  let context = {
    count: 0,
    attempts: true,
    name,
    rules,
  };

  while (context.attempts) {
    const progression = [];
    progression.length = getRandomInt(5, 11);
    const firstValue = getRandomInt(1, 101);
    const hiddenValue = getRandomInt(0, progression.length);
    const progressionStep = getRandomInt(1, 10);

    for (let count = 0; count < progression.length; count += 1) {
      if (count === 0) {
        progression[count] = firstValue;
        count += 1;
      }
      progression[count] = progression[count - 1] + progressionStep;
    }
    context.correctAnswer = String(progression[hiddenValue]);
    progression[hiddenValue] = '..';

    context.question = progression;
    console.log(`Question: ${context.question}`);
    context.answer = readlineSync.question('Your answer: ');

    context = getAnswer(context);
    if (context.count === 3) {
      console.log(`Congratulations, ${context.name}!`);
      break;
    }
  }
};
