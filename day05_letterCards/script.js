const board = document.getElementById("card-board");
const wordData = {
  upper: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  lower: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
};
const switchBtn = document.getElementById("switch");
const shuffleBtn = document.getElementById("shuffle");
board.innerHTML = "";
let currentMode = "upper";
let letters = [...wordData[currentMode]];
let statusList=new Array(26).fill(false);


function shuffleLetters() {
  board.innerHTML = "";
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
    [statusList[i],statusList[j]]=[statusList[j],statusList[i]];
  }
};
function renderBoard() {
  board.innerHTML = "";

  letters.forEach((letter, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = letter;
    if(statusList[index]){
      cell.classList.add("selected");
    }
    cell.addEventListener("click", () => {
      cell.classList.add("selected");
      statusList[index]=true;
    });

    board.appendChild(cell); //boardの子として追加する
  });
}

switchBtn.addEventListener("click", () => {
  if (currentMode === "upper") {
    currentMode = "lower";
    letters = [...wordData.lower];
    switchBtn.textContent = "大文字にする";
  } else {
    currentMode = "upper";
    letters = [...wordData.upper];
    switchBtn.textContent = "小文字にする";
  }
  renderBoard();
});

shuffleBtn.addEventListener("click", () => {
  shuffleLetters();
  renderBoard();
});

shuffleLetters();
renderBoard();
