const header = document.getElementById("header");
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll(".filter-btn");
const toggleThemeBtn = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function setHeaderBackground() {
  const darkMode = document.documentElement.classList.contains("dark");
  header.style.backgroundImage = darkMode
    ? "url('./images/bg-desktop-dark.jpg')"
    : "url('./images/bg-desktop-light.jpg')";
  themeIcon.src = darkMode ? "./images/icon-sun.svg" : "./images/icon-moon.svg";
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(text) {
  if (!text.trim()) return;
  tasks.push({ id: Date.now(), text: text.trim(), completed: false });
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
  saveTasks();
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
}

function setFilter(newFilter) {
  filter = newFilter;
  renderTasks();
}

function renderTasks() {
  let filteredTasks = [];
  if (filter === "all") filteredTasks = tasks;
  else if (filter === "active") filteredTasks = tasks.filter((task) => !task.completed);
  else if (filter === "completed") filteredTasks = tasks.filter((task) => task.completed);

  taskList.innerHTML = filteredTasks
    .map(
      (task) => `
    <li
      class="flex items-center justify-between px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
      data-id="${task.id}"
    >
      <label class="flex items-center space-x-3 cursor-pointer">
        <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
        <span class="${task.completed ? "line-through text-gray-400" : ""}">${task.text}</span>
      </label>
      <button class="delete-btn text-gray-400 rounded-full p-1.5 hover:bg-gray-300" aria-label="Delete task">
            <img src="./images/icon-cross.svg" class="delete-btn text-gray-400 rounded-full p-1.5" aria-label="Delete task"/>
      </button>
    </li>`,
    )
    .join("");

  const activeCount = tasks.filter((task) => !task.completed).length;
  itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;

  filterButtons.forEach((btn) => {
    btn.classList.toggle("text-blue-500", btn.dataset.filter === filter);
  });
}

newTaskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask(newTaskInput.value);
    newTaskInput.value = "";
  }
});

taskList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (e.target.classList.contains("checkbox")) {
    toggleTask(id);
  } else if (e.target.classList.contains("delete-btn")) {
    deleteTask(id);
  }
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setFilter(btn.dataset.filter);
  });
});

clearCompletedBtn.addEventListener("click", clearCompleted);

toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  setHeaderBackground();
});

setHeaderBackground();
renderTasks();
