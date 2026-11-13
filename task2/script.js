const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

let count = 0;

function updateCounter() {
  taskCounter.textContent = count;
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("გთხოვთ ჩაწეროთ დავალება");
    return;
  }

  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-2.5 hover:border-sky-500/50 transition-all duration-200";
  
  const span = document.createElement("span");
  span.className = "text-sm text-slate-200 font-medium";
  span.textContent = text;
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn text-slate-400 hover:text-rose-400 p-1 rounded-lg transition text-sm font-bold";
  
  deleteBtn.addEventListener("click", function () {
    li.remove();
    count--;
    updateCounter();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  count++;
  updateCounter();

  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});