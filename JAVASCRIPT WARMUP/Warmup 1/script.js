var rec = document.querySelector("#center")

rec.addEventListener("mousemove",function(details){
      var recloc = rec.getBoundingClientRect()
      var insiderec = details.clientX - recloc.left

      if(insiderec<recloc.width/2){
            var redcolor = gsap.utils.mapRange(0,recloc.width/2,255,0,insiderec);
            gsap.to(rec,{
                  backgroundColor:`rgb(${redcolor},0,0)`,
                  ease: Power4,
            });
      }
            else{
                  var bluecolor = gsap.utils.mapRange(recloc.width/2,recloc.width,0,255,insiderec);
                  gsap.to(rec,{
                  backgroundColor:`rgb(0,0,${bluecolor})`,
                  ease: Power4,
            });     
      }
});

rec.addEventListener("mouseleave",function(){
      gsap.to(rec,{
            backgroundColor:"white"
      });
})
