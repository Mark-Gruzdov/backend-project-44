import playGame from '../index.js';

export default function getCalc() {
  playGame({
    title: 'brain-calc',
    count: 0,
    attempts: true,
    rules: 'What is the result of the expression?',
  });
}
