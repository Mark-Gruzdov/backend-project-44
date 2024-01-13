import readlineSync from 'readline-sync';

function playGame(context) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(context.rules);

  while (context.attempts) {
    console.log(`Question: ${context.question}`);
    context.answer = readlineSync.question('Your answer: ');
    if (context.answer === context.correctAnswer) {
      context.count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${context.answer}' is wrong answer ;(. Correct answer was '${context.correctAnswer}'.\nLet's try again, ${name}!`);
      context.attempts = false;
    }

    if (context.count === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
  return name;
}

function getRandomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
}

// function getAnswer(context) {
//   if (context.answer === context.correctAnswer) {
//     context.count += 1;
//     console.log('Correct!');
//   } else {
//     console.log(`'${context.answer}' is wrong answer ;(. Correct answer was '
// ${context.correctAnswer}'.\nLet's try again, ${context.name}!`);
//     context.attempts = false;
//   }

//   return context;
// }

export { playGame, getRandomInt };
