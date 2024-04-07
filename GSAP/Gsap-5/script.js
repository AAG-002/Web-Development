let circle = document.querySelector("#circle");

window.addEventListener('mousemove', function(details){
      let xValue = details.pageX;
      let yValue = details.pageY;

      this.setTimeout(function(){
            circle.style.top = yValue + 'px';
            circle.style.left = xValue + 'px';
      }, 100)
      
})


$('#down #text h3').textillate({
      autoStart: false,
      in: {
            effect:"fadeInUp",
            delay: 15
      }
})


$('#hero h1').textillate({
      in: {
            effect:"fadeInUp"
      },
      loop: true,
      out: {
            effect:"fadeOutRight"
      }
})

gsap.to('.fader',{
      scrollTrigger:{
            trigger: '#down',
            markers: true,
            start: 'top 40%',
            toggleActions: 'play pause resume reverse',
      },
      opacity:0,
      y:-100,
      stagger: .3,
      duration: 2,
      onComplete:function(){
            $('#down #text h3').textillate('start')
      }
      
})

