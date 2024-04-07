var arr = [
{     
      dp:"https://plus.unsplash.com/premium_photo-1695339147014-32f68336c10c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      story:"https://images.unsplash.com/photo-1616262862743-6091f7c0d1fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"            
},
{
      dp:"https://images.unsplash.com/photo-1694845479195-8768d4317ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      story:"https://images.unsplash.com/photo-1673181914844-d255f8d4eb8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
},
{
      dp:"https://images.unsplash.com/photo-1673181914844-d255f8d4eb8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      story:"https://images.unsplash.com/photo-1695684720698-3691d44a7c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2008&q=80"
},
{
      dp:"https://images.unsplash.com/photo-1695684720698-3691d44a7c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2008&q=80",
      story:"https://images.unsplash.com/photo-1616262862743-6091f7c0d1fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
}
]

var stories = document.querySelector("#stories")

var clutter = ""
arr.forEach(function(elem, index){
      clutter += `<div class="story">
      <img id="${index}"src="${elem.dp}" alt="">
</div>`
})

stories.innerHTML = clutter

stories.addEventListener("click",function(details){
      document.querySelector("#fullsrc").style.display= "block";
      document.querySelector("#fullsrc").style.backgroundImage =  `url(${arr[details.target.id].story})`;

      setTimeout(function(){
      document.querySelector("#fullsrc").style.display= "none";
      },3000)
})
