//yore code goes here
var figlet = require("figlet");
const readline = require("readline");

const question = (str) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(str, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
};

console.log(
  figlet.textSync("HANG MAN", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);

const words = ["apple", "house", "dog", "assignment", "program"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const game = async () => {
  const letterRegex = new RegExp(/[a-zA-Z]/);
  const index = getRandomInt(0, words.length);
  const chosenWord = words[index].toLocaleLowerCase().split("");
  let userWord = chosenWord.map(() => "*");
  let numOfAttempts = 10;

  const applyGuess = (guess) => {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === guess) {
        userWord[i] = guess;
      }
    }
  };

  while (numOfAttempts > 0) {
    console.log(`You have ${numOfAttempts} guesses`);
    console.log("The word is:");
    console.log(userWord.join(" "));

    const guess = await question('');

    if (!letterRegex.test(guess)) {
      console.log("guess is invalid");
      continue;
    } else if (guess.length > 1) {
      console.log("please enter only one character");
      continue;
    } else if (chosenWord.includes(guess.toLocaleLowerCase())) {
      applyGuess(guess.toLocaleLowerCase());
      if (!userWord.includes('*')) {
        console.log('Wow you are good!!!')
        break;
      }
    } else {
      numOfAttempts = numOfAttempts - 1;
    }
  }
};

game();