// dom => document object model
console.log(document);

const task = document.getElementById("title");
const add_task_btn =
  document.getElementById("add_task_btn");

add_task_btn.addEventListener("click", (e) => addTask(e));

function addTask(e) {
  e.preventDefault();
  console.log(e);
  console.log(task.value);
  renderTask(task.value);
}

const task_view = document.getElementById("task_view");
function renderTask(task) {
  const h2 = document.createElement("h2");

  h2.innerText = task;
  task_view.appendChild(h2);
}
