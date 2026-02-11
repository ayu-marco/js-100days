const board = document.getElementById("card-board");
const wordData = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  lower: "abcdefghijklmnopqrstuvwxyz".split(""),
};

const switchBtn = document.getElementById("switch");
const shuffleBtn = document.getElementById("shuffle");
//board.innerHTML = "";
let currentMode = "upper";
//let letters = [...wordData[currentMode]];
let indexes=[...Array(26).keys()];
let statusList=new Array(26).fill(false);

function renderBoard() {
  board.innerHTML = "";

  indexes.forEach((alphabetIndex, arrayindex) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.textContent = wordData[currentMode][alphabetIndex];
    if(statusList[alphabetIndex]){
      cell.classList.add("selected");
    }
    cell.addEventListener("click", () => {
      
      statusList[alphabetIndex]=!statusList[alphabetIndex];
      cell.classList.toggle("selected");
    });

    board.appendChild(cell); //boardの子として追加する
  });
}
function shuffleLetters() {
  //board.innerHTML = "";
  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    //[statusList[i],statusList[j]]=[statusList[j],statusList[i]];
  }
};



switchBtn.addEventListener("click", () => {
  currentMode=currentMode==="upper" ? "lower":"upper";
  switchBtn.textContent=currentMode==="upper" ? "小文字にする":"大文字にする";
  renderBoard();
});

shuffleBtn.addEventListener("click", () => {
  shuffleLetters();
  renderBoard();
});

shuffleLetters();
renderBoard();
