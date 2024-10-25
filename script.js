document.addEventListener("DOMContentLoaded", function () {
    
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
  
      removeButton.onclick = function () {
        taskList.removeChild(taskItem);
      };
  
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = "";
    }
  
    addButton.addEventListener("click", addTask);
  
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });

  //Implement local storage for the To-Do list
 
document.addEventListener("DOMContentLoaded", function () {
    
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    loadTasks();
  
    function addTask(taskText, save = true) {
      if (!taskText) {
        taskText = taskInput.value.trim();
      }
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
  
      removeButton.onclick = function () {
        taskList.removeChild(taskItem);
        removeTask(taskText);
      };
  
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = "";
  
      if (save) {
        saveTask(taskText);
      }
    }
  
    function saveTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.forEach(taskText => addTask(taskText, false));
    }
  
    function removeTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  
    addButton.addEventListener("click", addTask);
  
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });