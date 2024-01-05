let noteContainer = document.querySelector(".notes-container");
let btn =  document.getElementById("btn");
let note = document.querySelectorAll(".input-box");
let img = document.createElement("img");
img.src = "images/delete.png";
function showTask() {
    listCont.innerHTML= localStorage.getItem("data");
}
btn.addEventListener("click",function() {
    let inputBox = document.createElement("p");
    inputBox.contentEditable = "true"
    let img = document.createElement("img");
    inputBox.className = "input-box";
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})
noteContainer.addEventListener("click",function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})

