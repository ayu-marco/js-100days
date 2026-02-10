const container=document.getElementById("card-container");

//container.textContent="ここにカードを表示させるよ！";

const appList = [
  { 
    title: "計算アプリ", 
    desc: "算数の練習ができます",
    link: "https://google.com", // 実際のURLに
    image: "https://via.placeholder.com/250x150" // 仮の画像URL
  },
  { 
    title: "英単語アプリ", 
    desc: "英語の勉強ができます",
    link: "#",
    image: "https://via.placeholder.com/250x150"
  }
];

//container.innerHTML="<div><h3>アプリのタイトル</h3><p>説明文です</p></div>";

let htmlContent=``;

appList.forEach(app=>{
    htmlContent+=`
    <div class="card">
        <img src="${app.image}" class="card-img">
        <div class="card-body">
            <h3>${app.title}</h3>
            <p>${app.desc}</p>
            <a href="${app.link}" class="btn">アプリを開く</a>
        </div>
    </div>
    `;

});

container.innerHTML=htmlContent;




