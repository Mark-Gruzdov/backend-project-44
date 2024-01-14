import playGame from '../index.js';

export default function getProgression() {
  playGame({
    title: 'brain-progression',
    count: 0,
    attempts: true,
    rules: 'What number is missing in the progression?',
  });
}
