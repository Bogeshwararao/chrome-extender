let myleads=[]
let inputel = document.getElementById("input-el")
let ulel = document.getElementById("ul-el")
let inputbtn = document.getElementById("input-btn")
inputbtn.addEventListener("click",function(){
   myleads.push(inputel.value)
   inputel.value =  ""
   renderleads()
})
function renderleads(){
   let lisitems =""
   for( let i = 0 ; i<myleads.length;i++){
        lisitems +=
         <li>
           <a target='_blank' herf='${myleads[i]}'>
              ${myleads[i]}
              </a>
                      </li>    
   }
   ulel.innerHTML=lisitems
}


