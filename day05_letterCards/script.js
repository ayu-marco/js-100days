const board = document.getElementById("card-board");
const uL = ["A",
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
  "Z",];
const lL = [
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
];
const btn = document.getElementById("switch");
board.innerHTML = "";

let letters = uL;

function setLetters() {
  board.innerHTML = "";
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }

  letters.forEach((letter, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = letter;

    cell.addEventListener("click", () => {
      cell.classList.add("selected");
    });

    board.appendChild(cell); //boardの子として追加する
  });
};
setLetters();
btn.addEventListener("click", () => {
  if (letters == uL) {
    letters = lL;
    btn.textContent = "大文字バージョンにする";
    setLetters();
  } else {
    letters = uL;
    btn.textContent = "小文字バージョンにする";
    setLetters();
  }
});
