const inputBox = document.getElementById("input-box")
const listcontaineer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value === '')
        alert("You must write something");
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listcontaineer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "" ;
    saveData();
}
listcontaineer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcontaineer.innerHTML);
}

function showTask(){
    listcontaineer.innerHTML = localStorage.getItem("data")
}
showTask();