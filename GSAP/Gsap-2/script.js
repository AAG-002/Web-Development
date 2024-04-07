var tl = gsap.timeline()

tl.from("#nav",{
      opacity:0,
      delay:0.5,
      y: -50
})

tl.from("#nav h1, #nav h2",{
      y: -80,
      duration:0.8,
      opacity:0,
      stagger:0.3
})

tl.from("#left h1",{
      x: -500,
      opacity:0,
      stagger:0.4,
      duration:0.5
})

tl.from("#right img",{
      scale:2,
      opacity:0,
      duration:0.5
})

gsap.from("#page2 .box",{
      scale:0,
      duration:1,
      stagger:0.3,
      scrollTrigger:{
            Trigger:"#page2 .box",
            scroller:"body",
            start: "bottom 20%"
      }
})