window.addEventListener("mousemove", function(details){

  var rectangle = document.querySelector("#rectangle")  
  var bla = gsap.utils.mapRange
  (0, 
      window.innerWidth,
      50+rectangle.getBoundingClientRect().width/2,
      window.innerWidth-(50+rectangle.getBoundingClientRect().width/2),
      details.clientX
      );
  
      gsap.to('#rectangle',{
            left: bla,
            top:details.clientY,
            ease: Power3
      });
});