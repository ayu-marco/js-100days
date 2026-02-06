//htmlから情報を持ってくる
const button = document.getElementById("colorButton");
const body = document.body;
const colorText = document.getElementById("colorCode");

//ボタンをクリックした時の動き
button.addEventListener("click", () => {
    //ランダムな色を作る
    const randomColor = "#" + Math.floor(Math.random()* 16777215).toString(16);
    //背景色を書き換える
    body.style.backgroundColor = randomColor;
    //テキストも書き換える
    colorText.innerText = randomColor;
})