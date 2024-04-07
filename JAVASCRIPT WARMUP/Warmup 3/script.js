// Throttling Function
const throttleFunction=(func, delay)=>{

let prev = 0;
return (...args) => {

      let now = new Date().getTime();
      
      if(now - prev> delay){
      prev = now;

      return func(...args); 
      }
}
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((details)=>{
      var div = document.createElement("div");
      div.classList.add("imgdiv");
      div.style.left = details.clientX + 'px';
      div.style.top = details.clientY + 'px';

      var img = document.createElement("img");
      img.setAttribute("src", "https://images.unsplash.com/photo-1593443320739-77f74939d0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80")
      div.appendChild(img)
      
      document.body.appendChild(div);

      gsap.to(img,{
            y:0,
            ease: Power3,
            duration: 0.6
      })

      gsap.to(img,{
            y:"100%",
            ease: Power1,
            delay: 1    
      })


      setTimeout(function(){
            div.remove();
      },2000)
}, 400));
