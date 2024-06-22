#! usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 100 + 1 ); 
const answer = await inquirer.prompt([
  {
    message: "Please guess and enter a number between 1-100",
    type: "number",
    name: "GuessedNumberofUser",
  },
]);

if (answer.GuessedNumberofUser === randomNumber ) {
    console.log("You guessed the right number. Congrats!");
} else { 
    console.log("You guessed the wrong number. Let's Try Again!")
};

