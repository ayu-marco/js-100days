//getElementByIdじゃなくてquerySelectorを使ってみる
const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

/*
if(text.textContent == "やる気：OFF"){
btn.addEventListener("click", () => {
  text.textContent = "やる気：ON";
})
}else{
    btn.addEventListener("click", () => {
  text.textContent = "やる気：OFF";
});
}
*/

btn.addEventListener("click", () => {
    if (text.textContent === "やる気：OFF"){
        text.textContent = "やる気：ON";
    }else{
        text.textContent = "やる気：OFF";
    }
});