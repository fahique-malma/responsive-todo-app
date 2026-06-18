const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  createTask(taskText);

  taskInput.value = "";
}

function createTask(text) {
  const li = document.createElement("li");

  li.innerHTML = `
        <div class="task-left">

          <div class="check-btn"></div>

          <span class="task-text">${text}</span>

        </div>

        <div class="actions">

          <i class="fa-solid fa-pen edit-btn"></i>

          <i class="fa-solid fa-xmark delete-btn"></i>

        </div>
      `;

  const checkBtn = li.querySelector(".check-btn");
  const taskText = li.querySelector(".task-text");

  checkBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  taskText.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = li.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  const editBtn = li.querySelector(".edit-btn");

  editBtn.addEventListener("click", () => {
    const updatedText = prompt("Edit your task", taskText.textContent);

    if (updatedText !== null && updatedText.trim() !== "") {
      taskText.textContent = updatedText;
    }
  });

  taskList.appendChild(li);
}

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});