var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
      score += 10;
      document.querySelector("#score").textContent = score;
}

function getNewHit(){
      hitrn = Math.floor(Math.random() * 10)
      document.querySelector("#hit").textContent = hitrn;
}

function runTimer(){ 
      var timerint = setInterval(function() {
                if(timer > 0){
                      timer--;
                      document.querySelector("#timer").textContent = timer;
                }
                else{
                      clearInterval(timerint);
                      document.querySelector("#panelbottom").innerHTML = `<h1>Game Over</h1>`;
                }
          }, 1000);
    }

function makeBubble(){
      var clutter = '';

for(var i = 1; i <=126; i++){
      var rn = Math.floor(Math.random()*10);
      clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector('#panelbottom').innerHTML = clutter;
}

document.querySelector("#panelbottom").addEventListener("click",function(details){
      var clickedNum = Number(details.target.textContent);
      if(clickedNum == hitrn){
            increaseScore();
            makeBubble();
            getNewHit();
      }
})

runTimer();
makeBubble();
getNewHit();
increaseScore();