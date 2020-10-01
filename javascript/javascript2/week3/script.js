const timeLimit = document.querySelector("input");
const button = document.getElementById("start");
const h2 = document.querySelector("h2");
const textS = document.getElementById("textS");
const textL = document.getElementById("textL");
const resultS = document.getElementById("resultS");
const resultL = document.getElementById("resultL");
const seconds = timeLimit.value;
let countS;
let countL;

const startCount = () => {
  textS.innerHTML = "0";
  textL.innerHTML = "0";
  countS = 0;
  countL = 0;
  textS.hidden = false;
  textL.hidden = false;
  resultS.hidden = true;
  resultL.hidden = true;
};

const displayWinner = () => {
  if (countS > countL) {
    resultS.hidden = false;
    return "S";
  }
  if (countL > countS) {
    resultL.hidden = false;
    return "L";
  }
  if (countL === countS) {
    resultL.hidden = false;
    resultS.hidden = false;
    return "tie";
  }
};

const startGame = () => {
  console.log(timeLimit.value);
  setTimeout(displayWinner, timeLimit.value * 1000);
  startCount();
};

button.addEventListener("click", startGame);

const count = ({ keyCode }) => {
  if (keyCode === 83) {
    textS.innerHTML = ++countS;
  }
  if (keyCode === 76) {
    textL.innerHTML = ++countL;
  }
};
document.addEventListener("keyup", count);
