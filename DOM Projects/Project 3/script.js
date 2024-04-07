var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(details){
      crsr.style.left = details.clientX + 'px'
      crsr.style.top = details.clientY + 'px'
})