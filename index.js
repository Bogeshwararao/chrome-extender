let myleads=[]
let inputel = document.getElementById("input-el")
let ulel = document.getElementById("ul-el")
let inputbtn = document.getElementById("input-btn")
inputbtn.addEventListener("click",function(){
   myleads.push(inputel.value)
   console.log(myleads)
})

