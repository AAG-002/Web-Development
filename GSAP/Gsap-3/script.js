var tl = gsap.timeline()

function time(){
      var a = 0
      setInterval(function(){
            a = a + Math.floor(Math.random()*15)
            if(a<100){
                  document.querySelector("#loading h1").innerHTML = a + "%"
            }else{
                  a = 100
                  document.querySelector("#loading h1").innerHTML = a + "%"
            }
            
      },150)
}

time()

tl.to("#loading h1",{
      delay:0.8,
      duration:1.3,
})

tl.to("#loading",{
      top:"-100vh",
      delay:0.5,
      duration:1.3,
})

gsap.to("#page1 h1",{
      transform: "translateX(-100%)",
      fontWeight:"100",
      scrollTrigger:{
            trigger:"#page1",
            scroller:"body",
            // markers:true,
            start:"top 0",
            end:"top -200%",
            scrub:2,
            pin: true
      }
})