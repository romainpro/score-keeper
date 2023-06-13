let scorePLayeurOne = document.getElementById(`scorePLayeurOne`);
let scorePLayeurTow = document.getElementById(`scorePLayeurTwo`);

//let maxScore = document.getElementById(`maxScore`).value;
let displayMaxScore = document.getElementById(`maxScoreNumber`);

const btnPlayeurOne = document.getElementById(`btnPlayeurOne`);
const btnPlayeurTwo = document.getElementById(`btnPlayeurTwo`);
const btnPlayeurReset = document.getElementById(`btnReste`);

btnPlayeurOne.addEventListener(`click`, addPointPlayeurOne);
btnPlayeurTwo.addEventListener(`click`, addPointPlayeurTow);
btnPlayeurReset.addEventListener(`click`, reset);

function addPointPlayeurOne() {
  let maxScore = document.getElementById(`maxScore`).value;
  if (Number(scorePLayeurOne.textContent >= maxScore)) {
    scorePLayeurOne.style.color = `green`;
  } else {
    let scorePLayeurOneUp = Number(scorePLayeurOne.textContent) + 1;
    console.log(maxScore);
    scorePLayeurOne.textContent = scorePLayeurOneUp;
  }
}

function addPointPlayeurTow() {
  let maxScore = document.getElementById(`maxScore`).value;
  if (Number(scorePLayeurTow.textContent >= maxScore)) {
    scorePLayeurTow.style.color = `green`;
  } else {
    let scorePLayeurTowUp = Number(scorePLayeurTow.textContent) + 1;
    console.log(scorePLayeurTowUp);
    scorePLayeurTow.textContent = scorePLayeurTowUp;
  }
}

function reset() {
  scorePLayeurOne.textContent = 0;
  scorePLayeurTow.textContent = 0;
  maxScore.value = 0;
  scorePLayeurOne.style.color = "black";
  scorePLayeurTow.style.color = "black";
}

// function displayBtn() {
//     if (Number(maxScore) >= Number(scorePLayeurOne)) {
//         btnPlayeurTwo.style.display = "none";
//     } else if (Number(maxScore) >= Number(scorePLayeurTow)) {
//         btnPlayeurOne.style.display = "none";
//     }
// }
