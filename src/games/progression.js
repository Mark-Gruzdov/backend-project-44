import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function generateProgression(length, step, firstValue, hiddenValue) {
  const progressionArray = [];
  for (let count = 0; count < length; count += 1) {
    if (count === 0) {
      progressionArray[count] = firstValue;
      count += 1;
    }
    progressionArray[count] = progressionArray[count - 1] + step;
  }
  const correctAnswer = String(progressionArray[hiddenValue]);
  progressionArray[hiddenValue] = '..';
  const question = progressionArray.join(' ');

  return [question, correctAnswer];
}

function generateGameData() {
  const length = getRandomInt(5, 10);
  const firstValue = getRandomInt(1, 101);
  const hiddenValue = getRandomInt(0, length - 1);
  const progressionStep = getRandomInt(1, 10);
  const gameData = generateProgression(
    length,
    progressionStep,
    firstValue,
    hiddenValue,
  );
  const question = gameData[0];
  const correctAnswer = gameData[1];

  return [question, correctAnswer];
}

export default function getProgression() {
  playGame('What number is missing in the progression?', generateGameData);
}
