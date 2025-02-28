//The function to add tasks to the unordered list.
function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    //Warning for empty task.
    if(taskText === ""){
        alert("Enter a task.");
        return;
    }

    //Adding the entered task to the list.
    let li = document.createElement("li");
    li.textContent = taskText;
    document.getElementById("taskList").appendChild(li);

    //Removing the task upon click.
    li.onclick = function(){
        this.remove();
    };

    //Clear the input box area.
    taskInput.value = "";
}
