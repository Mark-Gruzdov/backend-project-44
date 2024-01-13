import playGame from '../index.js';

export default function getProgression() {
  const context = {
    title: 'brain-progression',
    count: 0,
    attempts: true,
    rules: 'What number is missing in the progression?',
  };

  playGame(context);
}
