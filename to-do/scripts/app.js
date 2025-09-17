// dom => document object model
console.log(document);
let todo_list =
  JSON.parse(localStorage.getItem("todo")) || [];
// JSON.parse(localStorage.getItem("todo")) || [];
console.log(todo_list);
/*
  {
    id: ,
    title: ,
    completed: true/fasle
  }
*/

const task = document.getElementById("title");
const add_task_btn =
  document.getElementById("add_task_btn");

add_task_btn.addEventListener("click", (e) => addTask(e));

function addTask(e) {
  e.preventDefault();
  // let task_obj = {}
  console.log(e);
  console.log(task.value);
  console.log(todo_list.length);
  // task_obj.id = todo_list.length + 1
  // task_obj.title = task.value;
  // task.completed = false
  let pervious_task = todo_list.filter(
    (item) => item.title === task.value
  );

  // console.log("pervious task", pervious_task);
  if (pervious_task.length > 0) {
    return alert("task already added");
  }

  let task_obj = {
    id: todo_list.length + 1,
    title: task.value,
    completed: false,
  };

  // let json_obj = JSON.stringify(task_obj);
  todo_list.unshift(task_obj);
  // renderTask(task_obj);
  task.value = "";
  localStorage.setItem("todo", JSON.stringify(todo_list));
  // renderTodo();
  renderTask(task_obj);
}

/*
<div class="todo-item">
            <input type="checkbox" id="todo-1" class="todo-item__checkbox" aria-describedby="todo-1-label">
            <label for="todo-1" id="todo-1-label" class="todo-item__label">
                to-do item
            </label>
        </div> 
*/
const task_view = document.getElementById("task_view");
function renderTask(task) {
  console.log(task);
  console.log(`${task.id}`);
  const div = document.createElement("div");
  div.classList = "todo-item";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = `todo-${task.id}`;
  input.classList = "todo-item__checkbox";

  let label = document.createElement("label");
  label.classList = "todo-item__label";
  label.htmlFor = `todo-${task.id}`;
  label.innerText = task.title;
  div.appendChild(input);
  div.appendChild(label);

  task_view.appendChild(div);
}

//  todo list => loop

function renderTodo() {
  console.log(todo_list);

  // let items;
  todo_list.forEach((item) => {
    renderTask(item);
  });
}

renderTodo();
