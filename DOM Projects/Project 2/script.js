var img = document.querySelector("img")
var heart = document.querySelector("i")

img.addEventListener("dblclick",function(){
      heart.style.transform = "translate(-50%,-50%) scale(1)"
      setTimeout(function(){
            heart.style.transform = "translate(-50%,-50%) scale(0)"
      },2000);
});
