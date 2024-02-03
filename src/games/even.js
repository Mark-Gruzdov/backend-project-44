import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function evenCheck(question) {
  let result;

  if (question % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }

  return result;
}

function generateGameData() {
  const question = getRandomInt(0, 101);
  const correctAnswer = evenCheck(question);

  return [question, correctAnswer];
}

export default function getEven() {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', generateGameData);
}
