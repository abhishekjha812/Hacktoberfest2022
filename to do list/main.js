let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task");
let updateTaskBtn = document.getElementById("update-task");
let clearAllTasks = document.getElementById("clear-all");
let clearCompletedTasks = document.getElementById("clear-completed");
let taskSection = document.querySelector(".tasks");
let numberTasks = document.querySelector("#number-task");
let allTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
class Task{
    constructor(name,status,id) {
        this.name = name;
        this.status = status;
        this.id = id;
    }
    updateTaskName(newTask) {
        this.name = newTask;
    }
}
let indexArrayUpdate;
displayTasks(allTasks);
countTask(allTasks.length);
// let taskArray = [];
taskSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-task")) {
        deleteTask(e);
    }
    if (e.target.classList.contains("update-task")) {
        taskInput.value = e.target.parentElement.parentElement.children[1].textContent;
        addTaskBtn.style.display = "none";
        updateTaskBtn.style.display = "block";
        indexArrayUpdate = allTasks.findIndex((elem) => elem.name === e.target.parentElement.parentElement.children[1].textContent);
    }
    if (e.target.classList.contains("check-complete-task")) {
        indexArrayUpdate = allTasks.findIndex((elem) => elem.id === e.target.parentElement.parentElement.firstElementChild.id);
        allTasks[indexArrayUpdate]["status"] = true;
        updateLocalStorage();
        displayTasks(allTasks);
    }
})
addTaskBtn.addEventListener("click", () => {
    addTask();
    updateLocalStorage();
    displayTasks(allTasks);
    countTask(allTasks.length);
    taskInput.value = "";
})
updateTaskBtn.addEventListener("click", () => {
    allTasks[indexArrayUpdate]["name"] = taskInput.value;
    updateLocalStorage();
    displayTasks(allTasks);
    countTask(allTasks.length);
    addTaskBtn.style.display = "block";
    updateTaskBtn.style.display = "none";
    taskInput.value = "";
})
clearAllTasks.addEventListener("click", () => {
    localStorage.removeItem("tasks");
    allTasks = [];
    displayTasks(allTasks);
    countTask(allTasks.length);
})
clearCompletedTasks.addEventListener("click", () => {
    allTasks = allTasks.filter(ele => {
        return ele.status === false;
    })
    updateLocalStorage();
    displayTasks(allTasks);
    countTask(allTasks.length);
})
function addTask() {
    if (taskInput.value !== "") {
        let id = `${taskInput.value}--${Date.now()}`
        let task = new Task(taskInput.value,false,id);
        allTasks.push(task);

    } else {
        alert("the input is empty")
    }
}
function updateLocalStorage () {
    window.localStorage.tasks = JSON.stringify(allTasks);
}
function displayTasks(tasks) {
    taskSection.innerHTML = "";
    tasks.forEach(ele => {
        let task = document.createElement("div");
        task.className = "task";
        if (ele.status ==true) {
            task.classList.add("finish-task");
        }
        task.innerHTML = `<div class="complet-task">
        <input type="checkbox" name="${ele.id}" id="${ele.id}">
    <label for="${ele.id}" ><i class="fa-regular fa-circle-check check-complete-task" ></i></label>
    </div>
    <p>${ele.name}</p>
    <div class="delete-update">
        <i class="fa-regular fa-pen-to-square update-task"></i>
        <i class="fa-solid fa-xmark delete-task"></i>
    </div>`
        taskSection.append(task);
    })
}
function countTask(count) {
    numberTasks.innerHTML = `${count} Tasks`;
}
function deleteTask(e) {
    let a = allTasks.findIndex((elem) => elem.id === e.target.parentElement.parentElement.firstElementChild.firstElementChild.id);
    allTasks.splice(a, 1);
    updateLocalStorage();
    displayTasks(allTasks);
    countTask(allTasks.length);
}