var istatus = document.querySelector("h4")
var addf = document.querySelector("#add")
var check = 0

addf.addEventListener("click",function(){
      if(check==0){
            istatus.innerHTML =  "Friends"
            addf.innerHTML = "Remove"
            addf.style.backgroundColor = "rgb(202, 213, 255)"
            istatus.style.color = "Green"
            check = 1
      }
      else{
            istatus.innerHTML =  "Stranger"
            addf.innerHTML = "Add Friend"
            addf.style.backgroundColor = "rgb(255, 186, 186)"
            istatus.style.color = "rgb(127, 168, 255)"
            check = 0
      }

})
