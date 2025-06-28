const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log("🎲 Welcome to Dice Roll Guess!");
console.log("Guess the total of two dice (between 2 and 12).");

function askGuess() {
  rl.question("Your guess: ", input => {
    const guess = parseInt(input);

    if (isNaN(guess) || guess < 2 || guess > 12) {
      console.log("❌ Please enter a number between 2 and 12.");
      return askGuess();
    }

    const dice1 = rollDice();
    const dice2 = rollDice();
    const total = dice1 + dice2;

    console.log(`🎲 Dice rolled: ${dice1} + ${dice2} = ${total}`);

    if (guess === total) {
      console.log("🎉 You guessed it right!");
    } else {
      console.log("❌ Wrong guess, try again!");
    }

    rl.question("Play again? (y/n): ", answer => {
      if (answer.toLowerCase() === 'y') {
        askGuess();
      } else {
        console.log("Thanks for playing!");
        rl.close();
      }
    });
  });
}

askGuess();
