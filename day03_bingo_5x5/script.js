const board = document.getElementById("bingo-board");
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
board.innerHTML = "";

// ビンゴのパターンと、それぞれのパターンが出たかどうかを格納する配列を作る
const bingoPatterns = [
  [0,1,2,3,4], // 横
  [5,6,7,8,9], 
  [10,11,12,13,14], 
  [15,16,17,18,19], 
  [20,21,22,23,24], 
  [0,5,10,15,20], // 縦
  [1,6,11,16,21], 
  [2,7,12,17,22],
  [3,8,13,18,23],
  [4,9,14,19,24],
  [0,6,12,18,24], // 斜め
  [4,8,12,16,20],  
];
let bingoAchieved=Array(bingoPatterns.length).fill(false);


// lettersをシャッフル（Fisher-Yatesアルゴリズム）
for (let i = letters.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [letters[i], letters[j]] = [letters[j], letters[i]];
}
// ビンゴ用lettersを２５個取得
const bingoLetters = letters.slice(0, 25);
// 真ん中はFREEにする
bingoLetters[12] = "FREE";

// ビンゴ判定
function checkBingo(){
    const cells=document.querySelectorAll(".cell");
    let newBingo=false;

    bingoPatterns.forEach((pattern, index)=>{//patternはbingoPatternの要素、indexはbingoAchievedの番号
        if(!bingoAchieved[index]){//あるパターンのビンゴがまだ出ていなければ
            const isBingo=pattern.every(i=>//.everyは配列のすべての要素が条件を満たすかを判定。
                cells[i].classList.contains("selected")
            );
        if(isBingo){
            bingoAchieved[index]=true;//あるパターンのビンゴが出た、とフラグを立てて
            newBingo=true;//新しくビンゴが出たということにする
        } 
        }
    });

    return newBingo;//新しくビンゴが出たかどうか
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
