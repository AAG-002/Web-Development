var tl = gsap.timeline()

tl.from("#nav img, #nav h3, #nav button",{
      y:-100,
      duration:1,
      delay:1,
      opacity:0,
      stagger:0.2 
})

tl.from("#main h1",{
      scale:0,
      duration:1,
      opacity:0,
      stagger:0.2
})

tl.from("#left-img",{
      x:-100,
      opacity:0
})

tl.from("#right-img",{
      x:50,
      opacity:0
})

tl.from("#main h5",{
      opacity:0,
      scale:0
})

tl.to("#main h5",{
      y:30,
      repeat: -1,
      duration:0.6,
      yoyo: true
})