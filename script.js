const taskInput = document.getElementById('input-box');
    const taskList = document.getElementById('list-container');


function addTask() {
   
   
    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskInput.value;
        
        taskList.appendChild(taskItem);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        taskItem.appendChild(span);
        taskInput.value = '';
        
    }
   
    else {
        alert('Please enter a task!');
    }
    saveTask();
}
taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);
function saveTask(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();