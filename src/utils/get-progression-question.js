import getRandomInt from './get-random-int.js';

export default function getProgressionQuestion(context) {
  const progression = [];
  progression.length = getRandomInt(5, 10);
  const firstValue = getRandomInt(1, 101);
  const hiddenValue = getRandomInt(0, progression.length - 1);
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

  context.question = progression.join(' ');

  return context.question;
}
