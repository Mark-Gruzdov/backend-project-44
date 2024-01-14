import playGame from '../index.js';

export default function getPrime() {
  playGame({
    title: 'brain-prime',
    count: 0,
    attempts: true,
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  });
}
