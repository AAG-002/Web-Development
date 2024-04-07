const tl = gsap.timeline({
      scrollTrigger:{
            trigger: "#background",
            start: "top top",
            scrub: 1
      }
})

const elem = gsap.utils.toArray('.parallex').forEach(elem => {
      const depth = elem.dataset.depth;
      const shifting = -(depth * (elem.offsetHeight*0.9));
      tl.to(elem,{
            y: shifting,
            ease: "none"
      }, 0)
      .to('#overlay',{
            opacity: 0,
            ease: "none"
      }, 0)   
})

const tl2 = gsap.timeline({
      scrollTrigger: {
            trigger: "#content",
            start: "top center",
            toggleActions: 'play pause resume reverse'
      }
});


tl2.from('.img1',{
      stagger: .1,
      opacity: 0,
      duration: .5,
      delay: 0.5,
      ease: 'Expo.easeInOut'
})

tl2.from('.img2',{
      stagger: .1,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'Expo.easeInOut'
})

tl2.from('.img3',{
      stagger: .1,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'Expo.easeInOut'
})

tl2.from('.img4',{
      stagger: .1,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'Expo.easeInOut'
})

tl2.from('#content p',{
      y: 10,
      opacity: 0,
      duration: .5,
      ease: 'Expo.easeInOut'
})