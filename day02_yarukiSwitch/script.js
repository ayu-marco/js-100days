// ===== DOM取得 =====

//getElementByIdじゃなくてquerySelectorを使ってみる

const card = document.querySelector(".card");
const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
const timerText = document.querySelector("#timer");
const lastRecord = document.querySelector("#lastRecord");

// ===== 状態（変数） =====
let isOn = false;
let seconds = 0;
let timerId = null; //タイマーの整理番号

//===== 最初に１回だけやる処理（localStrage読む） =====
let lastSeconds = localStorage.getItem("lastSeconds");
if (lastSeconds !== null) {
  updateLastRecord(Number(lastSeconds));
}

updateTimerText();
//===== 関数 =====

function startTimer() {
  if (timerId !== null) return; //多重起動防止
  timerId = setInterval(() => {
    //setInterval(実行したい処理,何ミリ秒ごと)
    seconds++;
    updateTimerText();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId); //setIntervalを止める
  timerId = null;
  localStorage.setItem("lastSeconds", seconds); //先に保存
  updateLastRecord(seconds);
  seconds = 0; //リセット
  updateTimerText();
}

function updateLastRecord(sec) {
  const minutes = Math.floor(sec / 60);
  const remainingSeconds = sec % 60;
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  lastRecord.textContent = `前回：${minutes}:${formattedSeconds}`;
}

function updateUI() {
  card.classList.toggle("on", isOn);

  if (isOn) {
    text.textContent = "やる気：ON";
    btn.textContent = "OFFにする";
    startTimer();
  } else {
    text.textContent = "やる気：OFF";
    btn.textContent = "ONにする";
    stopTimer();
  }
}

function updateTimerText() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  timerText.textContent = `${minutes}:${formattedSeconds}`;
}
btn.addEventListener("click", () => {
  isOn = !isOn;
  updateUI();
});

/*変数isONがない時
btn.addEventListener("click", () => {
    if (text.textContent === "やる気：OFF"){
        text.textContent = "やる気：ON";
    }else{
        text.textContent = "やる気：OFF";
    }
});
*/
/*
btn.addEventListener("click", () => {
  if (isOn) {
    isOn = false;
    text.textContent = "やる気：OFF";
    btn.textContent = "ONにする";
  } else {
    isOn = true;
    text.textContent = "やる気：ON";
    btn.textContent = "OFFにする";
  }
  console.log(isOn);
});
:?
//console.log(isOn);

/*こういう書き方もある
btn.addEventListener("click", () => {
    isOn = !isOn;

    text.textContent = isOn ? "やる気：ON" : "やる気：OFF";
    btn.textContent = isOn ? "OFFにする" : "ONにする";

    console.log(isOn);
});
*/
