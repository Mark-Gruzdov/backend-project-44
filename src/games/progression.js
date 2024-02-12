import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function generateProgression(length, step, firstValue, hiddenValue) {
  const progressionArray = [];
  for (let count = 0; count < length; count += 1) {
    progressionArray.push(firstValue + (step * count));
  }
  progressionArray[hiddenValue] = '..';
  const progression = progressionArray.join(' ');

  return progression;
}

function generateGameData() {
  const length = getRandomInt(5, 10);
  const firstValue = getRandomInt(1, 101);
  const hiddenValue = getRandomInt(0, length - 1);
  const progressionStep = getRandomInt(1, 10);
  const question = generateProgression(
    length,
    progressionStep,
    firstValue,
    hiddenValue,
  );
  const correctAnswer = firstValue + (progressionStep * hiddenValue);

  return [question, correctAnswer];
}

export default function getProgression() {
  playGame('What number is missing in the progression?', generateGameData);
}
