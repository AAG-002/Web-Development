var active = 3;

var mcircles = document.querySelectorAll(".mcircle");

gsap.to(mcircles[active - 1],{
      opacity:1,
})

mcircles.forEach(function(val, index){
      val.addEventListener("click",function(){
            gsap.to("#circle",{
                  rotate: (3-(index+1))*20,
            })
            greyout();
            gsap.to(this,{
                  opacity:1
            })
      })
})

function greyout(){
      gsap.to(mcircles,{
            opacity:0.2
      })
}

gsap.to("#circle",{
      rotate: 0,
      ease: Expo.easeInOut,
      duration: 2.8
})
