 var popupoverlay =document.querySelector(".popup-overlay")
 var popupbox=document.querySelector(".popbox")
 var addbtn =document.getElementById("add-btn")

 addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
 })

 var cancel=document.getElementById("cancel")
 cancel.addEventListener("click",function(event){
    event.preventDefault()
       popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

 var container=document.querySelector(".container")
 var addbook=document.getElementById("addbook")
 var title=document.getElementById("inputbook")
 var author=document.getElementById("inputauthor")
 var description=document.getElementById("description")

addbook.addEventListener("click",function(event){
   event.preventDefault()
     var div=document.createElement("div")
     div.setAttribute("class","book")
     div.innerHTML= `<h2>${inputbook.value}</h2>
        <h5>${inputauthor.value}</h5>
        <p>${description.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

     inputbook.value = ""
    inputauthor.value = ""
    description.value = ""
})

function deletebook(event){
   event.target.parentElement.remove()
}