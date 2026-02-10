const container=document.getElementById("card-container");

//container.textContent="ここにカードを表示させるよ！";

const appList = [
  { title: "計算アプリ", desc: "算数の練習ができます" },
  { title: "英単語アプリ", desc: "英語の勉強ができます" },
  { title: "理科クイズ", desc: "星座のことが学べます" }
];

//container.innerHTML="<div><h3>アプリのタイトル</h3><p>説明文です</p></div>";

let htmlContent=``;

appList.forEach(app=>{
    htmlContent+=`
    <div class="card">
        <h3>${app.Title}</h3>
        <p>${app.Desc}</p>
    </div>
`;

});

container.innerHTML=htmlContent;




