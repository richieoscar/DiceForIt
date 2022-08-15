let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");
let playerOneButtun = document.getElementById("btnTwo");
let playerTwoButtun = document.getElementById("btnOne");
let imgOne = document.getElementById("imgOne");
let imgTwo = document.getElementById("imgTwo");
let diceOne = 0;
let diceTwo = 0;
let header = document.querySelector("h1");

playerOneButtun.addEventListener("click", () => {
  header.innerHTML = "Dice For It";
  diceOne = rollDiceOne();
  calculateWinner();
});

playerTwoButtun.addEventListener("click", () => {
  header.innerHTML = "Dice For It";
  diceTwo = rollDiceTwo();
  calculateWinner();
});

function calculateWinner() {
  if (diceOne != 0 && diceTwo != 0) {
    if (diceOne > diceTwo) {
      header.innerHTML = "Player One Wins";
      reset();
    } else if (diceOne < diceTwo) {
      header.innerHTML = "Player Two Wins";
      reset();
    } else {
      header.innerHTML = "A Draw!";
      reset();
    }
  }
}

function generateRandaom() {
  let ran = 0;
  while (true) {
    ran = Math.floor(Math.random(7) * 7);
    if (ran != 0) break;
  }
  return ran;
}

function reset() {
  diceOne = 0;
  diceTwo = 0;
}

function rollDiceOne() {
  let ran = generateRandaom();
  console.log(ran);
  if (ran === 1) {
    imgOne.setAttribute("src", "/images/dice1.png");
  } else if (ran === 2) {
    imgOne.setAttribute("src", "/images/dice2.png");
  } else if (ran === 3) {
    imgOne.setAttribute("src", "/images/dice3.png");
  } else if (ran == 4) {
    imgOne.setAttribute("src", "./images/dice4.png");
  } else if (ran === 5) {
    imgOne.setAttribute("src", "./images/dice5.png");
  } else if (ran === 6) {
    imgOne.setAttribute("src", "./images/dice6.png");
  }
  return ran;
}

function rollDiceTwo() {
  let ran = generateRandaom();
  console.log(ran);
  if (ran === 1) {
    imgTwo.setAttribute("src", "/images/dice1.png");
  } else if (ran === 2) {
    imgTwo.setAttribute("src", "/images/dice2.png");
  } else if (ran === 3) {
    imgTwo.setAttribute("src", "/images/dice3.png");
  } else if (ran == 4) {
    imgTwo.setAttribute("src", "./images/dice4.png");
  } else if (ran === 5) {
    imgTwo.setAttribute("src", "./images/dice5.png");
  } else {
    imgTwo.setAttribute("src", "./images/dice6.png");
  }
  return ran;
}
