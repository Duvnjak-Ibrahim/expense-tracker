let inputName=document.getElementById("input-el")
let inputDate=document.getElementById("input-el2")
let inputAmount=document.getElementById("input-el3")
let deleteBtn=document.getElementById("deletef-list")
let deleteLastBtn=document.getElementById("deletel-list")
let addExp=document.getElementById("add-exp")
let box=document.getElementById("box")


addExp.addEventListener("click",function(){
    let num=0
    num+=1
    let lists = ``
    lists =`        <div class="column"><li>${inputName.value}</li>
                    <li class="padding">${inputDate.value}</li>
                    <li>${inputAmount.value}</li><br></br></div>`  
    
    box.innerHTML+= lists
    // inputName.value=""
    // inputDate.value=""
    // inputAmount.value=""
})

deleteBtn.addEventListener("click",function(){
    box.removeChild(box.firstElementChild)
})

deleteLastBtn.addEventListener("click",function(){
    box.removeChild(box.lastElementChild)
})