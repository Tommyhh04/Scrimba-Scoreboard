// Lets the function change the text of the scoreboard by increments
let scoreNumHome = document.getElementById("score-num-home");
let scoreNumAway = document.getElementById("score-num-away");
//Sets the scoreboard number to zero
let scoreNumHom = 0;
let scoreNumAwa = 0;
//Home team score increment buttons
function plussHome1() {
  scoreNumHom += 1;
  scoreNumHome.textContent = scoreNumHom;
}

function plussHome2() {
  console.log("scoreNumHome");
  scoreNumHom += 2;
  scoreNumHome.textContent = scoreNumHom;
}

function plussHome3() {
  scoreNumHom += 3;
  scoreNumHome.textContent = scoreNumHom;
}

//Away team score increment buttons
function plussAway1() {
  scoreNumAwa += 1;
  scoreNumAway.textContent = scoreNumAwa;
}

function plussAway2() {
  scoreNumAwa += 2;
  scoreNumAway.textContent = scoreNumAwa;
}

function plussAway3() {
  scoreNumAwa += 3;
  scoreNumAway.textContent = scoreNumAwa;
}
