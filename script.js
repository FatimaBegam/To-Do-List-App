const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

// Function to create a new task item
function createTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete">Delete</button>
      <button class="complete">Complete</button>
    `;
    taskList.appendChild(taskItem);
    newTaskInput.value = "";

    // Event listener to mark a task as complete
    taskItem.querySelector(".complete").addEventListener("click", () => {
      taskItem.querySelector("span").classList.toggle("completed");
    });

    // Event listener to delete a task
    taskItem.querySelector(".delete").addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });
  }
}

// Event listener to add a new task
addTaskButton.addEventListener("click", createTask);

// Event listener to add a new task when Enter key is pressed
newTaskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    createTask();
  }
});
