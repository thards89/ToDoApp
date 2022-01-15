function updateCounters() {
//Total number of todos
const totalCount = document.getElementById("total-count");
const totalTodos = document.getElementsByClassName ("todo").length;
totalCount.innerHTML = totalTodos;


//Total number of completed todos
const completedCount = document.getElementById("completed-count")
const completedTodos = document.getElementsByClassName("completed").length;
completedCount.innerHTML = completedTodos;

//Total number of uncompleted todos
const todoCount = document.getElementById("todo-count");
const uncompletedTodos = totalTodos - completedTodos;
todoCount.innerHTML = uncompletedTodos;
}

updateCounters();

function toggleDone (event) {
    const checkbox = event.currentTarget;
    if (checkbox.checked) {
        checkbox.parentElement.parentElement.className = "todo completed";
    } else {
        checkbox.parentElement.parentElement.className = "todo";
    }

    updateCounters();
}

const checkboxes = document.querySelectorAll(".todo input");

for (let i=0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", toggleDone);
}