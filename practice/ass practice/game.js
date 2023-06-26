const prompt = require("prompt-sync")({ sigint: true });

let key = false;
function playGame() {
  let ans;
  let i = 0;
  while (i < game.length) {
    console.log(game[i].question);
    console.log(game[i].option1);
    console.log(game[i].option2);

    ans = prompt("Type your choice :");

    if (ans === game[i].right) {
      console.log("you have chosen the right choice\n");
      i++;
      key = true;
    } else {
      console.log("try again");
    }
  }
}

function startGame() {
  let start;
  start = prompt(
    "Do you want to play the PRISON GAME ? Enter your choice[y/n] :"
  );
  if (start === "y") {
    console.log("WELCOME TO THE PRISON GAME");
    playGame();
  } else if (start === "n") {
    console.log("Game has Ended");
  } else {
    console.log("Chose correct option ");
  }
}

const game = [
  {
    id: 1,
    question:
      "You are in the middle of the forest .......Your memory is lost .......You have to find a way out of this deadly forest.........You are low in energy find so you will have to eat something ....look around what do you see ?  pick something to eat ....",
    option1: "apple",
    option2: "stones",
    right: "apple",
  },

  {
    id: 2,
    question:
      "You walked around and to escape the forest you have to cross a river ....Look around and choose something to cross river......",
    option1: "sword",
    option2: "boat",

    right: "boat",
  },

  {
    id: 3,
    question:
      "you have sucessfully crossed the river .....now you have got in front of a lion .....to protect yourself from lion .......Look around and pick something....",
    option1: "sword",
    option2: "leaf",
    right: "sword",
  },
];

startGame();
if (key == true) {
  console.log("You have successfully crossed the forest ....Game has ended");
}
