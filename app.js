let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  // rock paper scissors
  // jb bhi hum multiple krta ha math.random(); ko kisi bhi number sa to iska ek number kam tk ka hamara pass random number geanator hota ha
  // example Math.random() * 10   Number genetor from 0 to 9
  // Math.floor(Math.random()*10) -----> Math.floor removes decimal values
  const options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("Game was draw.");
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "red";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("You win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    // console.log("You lose!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    // Game draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
