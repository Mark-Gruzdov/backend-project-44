import playGame from '../index.js';

export default function getEven() {
  playGame({
    title: 'brain-even',
    count: 0,
    attempts: true,
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  });
}
