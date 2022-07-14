const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

//ストップウォッチの表示
function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9 ).padStart(2, "0"); 
  const m = String(currentTime.getMinutes()).padStart(2, "0"); 
  const s = String(currentTime.getSeconds()).padStart(2, "0"); 
  const ms = String(currentTime.getMilliseconds()).padStart(3, "0"); 
  timer.textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}
//ボタンの処理
start.addEventListener("click", function(){
  start.disabled = true ;
  stop.disabled = false ;
  reset.disabled= true ;
  startTime = Date.now();
  displayTime()
});

stop.addEventListener("click", function(){
  start.disabled = false ;
  stop.disabled = true ;
  reset.disabled= false ;
  clearTimeout(timeoutID)
  stopTime += (Date.now() - startTime);
})

reset.addEventListener("click", function(){
  start.disabled = false ;
  stop.disabled = true ;
  reset.disabled= true ; 
  timer.textContent = "00:00:00.000"
  stopTime = 0
})



//1~4　要素の取得
//6　ストップウォッチの開始時間
//7　停止した時のデフォルトの値
//8　時間のカウントを止める際に識別するためのもの

//11　ストップウォッチの表示
//12  現在時刻（変数）ー後に定義するスタートボタンを押した時間＋停止した時に経過していた時間
//13　時（協定世界時を取得するので、気を付ける）
//14　分
//15　秒
//16　ミリ秒

//21~27　スタートボタンを押した時の処理、開始時間を変数に入れる
//29~35　ストップボタンを押した時の処理、停止した時の時間を確定
//37~43　リセットボタンを押した時の処理