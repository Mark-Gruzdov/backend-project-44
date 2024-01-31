import playGame from '../index.js';
import getRandomInt from '../utils/get-random-int.js';

function generateGameData() {
  const question = getRandomInt(0, 101);
  let correctAnswer;

  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return ([question, correctAnswer]);
}

export default function getEven() {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', generateGameData);
}
