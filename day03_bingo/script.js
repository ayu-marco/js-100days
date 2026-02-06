const board = document.getElementById("bingo-board");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
board.innerHTML = "";
const bingoPatterns = [
  [0,1,2], // 横1行目
  [3,4,5], // 横2行目
  [6,7,8], // 横3行目
  [0,3,6], // 縦1列目
  [1,4,7], // 縦2列目
  [2,5,8], // 縦3列目
  [0,4,8], // 斜め左上→右下
  [2,4,6]  // 斜め右上→左下
];




// lettersをシャッフル（Fisher-Yatesアルゴリズム）
for (let i = letters.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [letters[i], letters[j]] = [letters[j], letters[i]];
}
// ビンゴ用lettersを９つ取得
const bingoLetters = letters.slice(0, 9);
// 真ん中はFREEにする
bingoLetters[4] = "FREE";

// ビンゴ判定
function checkBingo(){
    const cells=document.querySelectorAll(".cell");
    return bingoPatterns.some(pattern=>{
        return pattern.every(index=>{
            const cell=cells[index];
            return cell.classList.contains("selected");
        });
    });


/*
    if(
        cells[0].classList.contains("selected")&&
        cells[1].classList.contains("selected")&&
        cells[2].classList.contains("selected")
    ){
        return true;
    }else{
        return false;
    }
*/
};


// cellを作り、letterを入れる
bingoLetters.forEach((letter) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = letter;

  cell.addEventListener("click", () => {
    cell.classList.add("selected");
    if(checkBingo()){
        alert("ビンゴ！");
    }
  });

  board.appendChild(cell); //boardの子として追加する
});
