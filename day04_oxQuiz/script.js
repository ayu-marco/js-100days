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
const start = document.getElementById("start-btn");
const restart=document.getElementById("restart-btn");


let currentStep = 0;
let score = 0;

// スタートボタンを押した時
start.addEventListener("click", () => {
  currentStep = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("answer").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("start-screen").classList.add("hidden");
  displayQuiz();
});

// 正解かどうかで表示する文章を変える
function correctAnswer(torf) {
  if (torf) {
    aCorrect.textContent = "正解は○";
  } else {
    aCorrect.textContent = "正解は×";
  }
}

// クイズを表示
function displayQuiz() {
  const currentQuiz = quizData[currentStep];
  qNumber.textContent = `第${currentStep + 1}問`;
  qText.textContent = currentQuiz.question;
  correctAnswer(currentQuiz.correct);
  aText.textContent = currentQuiz.description;
document.getElementById("lose").classList.remove("hidden");
document.getElementById("e-lose").classList.remove("hidden");
document.getElementById("win").classList.remove("hidden");
document.getElementById("e-win").classList.remove("hidden");


}

// oボタンを押したとき
document.getElementById("true-btn").addEventListener("click", () => {
  checkAnswer(true);
});
// xボタンを押したとき
document.getElementById("false-btn").addEventListener("click", () => {
  checkAnswer(false);
});

// ユーザーの解答が正しいかどうか判別しメッセージを表示
function checkAnswer(userChoice) {
  const currentQuiz = quizData[currentStep];

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("answer").classList.remove("hidden");
  if (userChoice === currentQuiz.correct) {
    judge.textContent = "正解！";
    document.getElementById("lose").classList.add("hidden");
    document.getElementById("e-lose").classList.add("hidden");
    score++;
  } else {
    judge.textContent = "残念…";
    document.getElementById("win").classList.add("hidden");
    document.getElementById("e-win").classList.add("hidden");
  }
}

// ネクストボタンを押したとき
next.addEventListener("click", () => {
  currentStep++;

  if (currentStep < quizData.length) {
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("answer").classList.add("hidden");
    displayQuiz();
  } else {
    alert("全問終了しました！");
    showResult();  
  }
});

// 全問終了したとき
function showResult(){
  document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    const report=document.getElementById("scoreReport");
    report.textContent=`${quizData.length}問中 ${score}問 正解！`;
};

// スタートへ戻るボタンを押したとき
restart.addEventListener("click", ()=>{
  document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
});