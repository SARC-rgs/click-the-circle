const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("🎯 Welcome to 'Guess the Number'!");
console.log("I'm thinking of a number between 1 and 100...");
console.log("Type your guess and press Enter:");

function askGuess() {
  rl.question("Your guess: ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("❌ Please enter a valid number.");
      return askGuess();
    }

    if (guess < target) {
      console.log("🔼 Too low. Try again!");
      askGuess();
    } else if (guess > target) {
      console.log("🔽 Too high. Try again!");
      askGuess();
    } else {
      console.log(`✅ Correct! You guessed it in ${attempts} tries.`);
      rl.close();
    }
  });
}

askGuess();

