import playGame from '../index.js';

export default function getGcd() {
  playGame({
    title: 'brain-gcd',
    count: 0,
    attempts: true,
    rules: 'Find the greatest common divisor of given numbers.',
  });
}
