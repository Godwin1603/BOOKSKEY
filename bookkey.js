

var popupoverlay1=document.querySelector(".popupoverlay")
var popupbox1=document.querySelector(".popupbox")
var addb1t=document.getElementById("addbt")

addb1t.addEventListener("click", function(){
    popupoverlay1.style.display="block" 
popupbox1.style.display="block"

} )
var cancel=document.getElementById("canc")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay1.style.display="none" 
    popupbox1.style.display="none"

})

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var title=document.getElementById("booktitle")
var bauthor=document.getElementById("author")
var sdescript=document.getElementById("description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`
    <h3>${title.value}</h3>
    <h5>${bauthor.value}</h5>
    <p>${sdescript.value}</p>
    <button onclick=dele(event) >Delete</button>`
    container.append(div)
    popupoverlay1.style.display="none" 
    popupbox1.style.display="none"
    
})
function dele(event)
{
    event.target.parentElement.remove()
}