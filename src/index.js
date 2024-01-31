import readlineSync from 'readline-sync';

export default function playGame(gameRules, generateGameData) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n${gameRules}`);

  for (let count = 0; count < 3; count += 1) {
    const gameData = generateGameData();
    const question = gameData[0];
    const correctAnswer = gameData[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return (`Let's try again, ${name}!`);
    }

    console.log('Correct!');
  }

  return (console.log(`Congratulations, ${name}!`));
}
