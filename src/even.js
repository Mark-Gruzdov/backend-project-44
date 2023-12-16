/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
}

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;
  let attempts = true;

  while (attempts) {
    let correctAnswer;
    const questionNumber = getRandomInt(0, 101);
    console.log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (questionNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    switch (answer) {
      case 'yes':
        if (questionNumber % 2 === 0) {
          count += 1;
          console.log('Correct!');
        } else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
          attempts = false;
        }
        break;
      case 'no':
        if (questionNumber % 2 !== 0) {
          count += 1;
          console.log('Correct!');
        } else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        }
        break;
      default:
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        attempts = false;
        break;
    }

    if (count === 3) {
      console.log(`Congratulations!, ${name}!`);
      break;
    }
  }
};
