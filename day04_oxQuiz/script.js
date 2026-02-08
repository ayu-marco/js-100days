const quizData = [
  {
    question: "わからないことがあったら、おうちの人に相談します。",
    correct: true,
    description:
      "わからないことがあったら、そのままにしないで、すぐにおうちの人や先生に相談しよう。",
  },
  {
    question: "自分1人のときに、プレゼントに応募してもいい。",
    correct: false,
    description:
      "個人情報はとても大切なものなので、必ず大人の人と一緒に応募しましょう。",
  },
  {
    question: "掲示板やチャットで書くことを、おうちの人と相談します。",
    correct: true,
    description:
      "掲示板やチャットに参加する前に、おうちの人とどんなことを書いてもいいのか、決めておきましょう。",
  },
  {
    question: "好きな友達の名前を掲示板に書いてもいい。",
    correct: false,
    description:
      "友達の名前も個人情報です。友達の名前を書くときは、ニックネームや下の名前だけにしましょう。",
  },
  {
    question:
      "掲示板やチャットなどでは、ハンドルネームやニックネームを使います。",
    correct: true,
    description: "本当の名前は個人情報なので教えてはいけません。",
  },
  {
    question:
      "インターネットを通じて仲良くなった友達でも、本当の名前を教えません。",
    correct: true,
    description:
      "本当は悪い大人の人かもしれないので、どんなに仲良しでも教えてはいけません。",
  },
];
const qNumber = document.getElementById("quiz-number");
const qText = document.getElementById("quiz-question");
const judge = document.getElementById("judge");
const aCorrect = document.getElementById("answer-correct");
const aText = document.getElementById("answer-comment");
const next = document.getElementById("next-btn");

let currentStep = 0;
let score=0;

function correctAnswer(torf) {
  if (torf) {
    aCorrect.textContent = "正解は○";
  } else {
    aCorrect.textContent = "正解は×";
  }
}

function displayQuiz() {
  const currentQuiz = quizData[currentStep];

  qNumber.textContent = `第${currentStep + 1}問`;
  qText.textContent = currentQuiz.question;
  correctAnswer(currentQuiz.correct);
  aText.textContent = currentQuiz.description;
}
displayQuiz();

document.getElementById("true-btn").addEventListener("click", () => {
  checkAnswer(true);
});
document.getElementById("false-btn").addEventListener("click", () => {
  checkAnswer(false);
});

function checkAnswer(userChoice) {
  const currentQuiz = quizData[currentStep];

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("answer").classList.remove("hidden");
  if (userChoice === currentQuiz.correct) {
    judge.textContent = "正解！";
    score++;
  } else {
    judge.textContent = "残念…";
  }
}

next.addEventListener("click", () => {
  currentStep++;

  if (currentStep < quizData.length) {
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("answer").classList.add("hidden");
    displayQuiz();
  }else{
    alert("全問終了しました！");
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
  }
});

/*
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
bingoLetters[12] = "★";

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
            pattern.forEach(i=>cells[i].classList.add("bingo"));//ビンゴになったセルに色をつける
        } 
        }
    });

    return newBingo;//新しくビンゴが出たかどうか
};

// cellを作り、letterを入れる
bingoLetters.forEach((letter, index) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = letter;
  
  if(index===12){
        cell.classList.add("bingo");
        cell.classList.add("selected");
      }  

  cell.addEventListener("click", () => {
    cell.classList.add("selected");
    if(checkBingo()){
        alert("ビンゴ！🎉🎉🎉");
    }
  });

  board.appendChild(cell); //boardの子として追加する
});
*/
