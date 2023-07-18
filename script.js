//Selecting elements

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.querySelector("button");




//Functions

//add item to ul
function addTask(){
    if(inputBox.value === ''){
        alert("Please add some Todos!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;        
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    addItemsToStorage();
}

//delete task from ul
function deleteTask(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        addItemsToStorage();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        addItemsToStorage();
    }
} false;

//Add items to local storage
function addItemsToStorage(){
    localStorage.setItem("item" , listContainer.innerHTML);
}

function showItem(){
    listContainer.innerHTML = localStorage.getItem("item");
}

showItem();

//Event Listeners
addButton.addEventListener("click",addTask);
listContainer.addEventListener("click", deleteTask);