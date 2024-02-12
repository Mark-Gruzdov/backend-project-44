import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function getCorrectAnswer(question) {
  const result = question % 2 === 0 ? 'yes' : 'no';

  return result;
}

function generateGameData() {
  const question = getRandomInt(0, 101);
  const correctAnswer = getCorrectAnswer(question);

  return [question, correctAnswer];
}

export default function getEven() {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', generateGameData);
}
