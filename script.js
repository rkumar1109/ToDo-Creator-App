document.getElementById("footer").innerText = `Copyright © ${new Date().getFullYear()}`;

const inputTodo = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

function addTodo() {
  const createTodo = inputTodo.value;

  if (createTodo === "") {
    alert("Write Something....");
  } else {
    const newTodo = document.createElement("li");
    newTodo.innerText = createTodo;
    listContainer.appendChild(newTodo);
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "\u00d7";
    newTodo.appendChild(deleteButton);
    saveData();
  }
  document.getElementById("task-input").value = "";
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
}, false);

function searchTodo() {
  const searchInput = document.getElementById("task-input").value;
  const todoItems = document.querySelectorAll("#list-container li");

  todoItems.forEach(function (todo) {
    const todoText = todo.innerText.toLowerCase();

    if (todoText.includes(searchInput)) {
      todo.style.display = "";
    } else {
      todo.style.display = "none";
    }
  });
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();

const filterAllButton = document.getElementById("filter-all");
const filterPendingButton = document.getElementById("pending");
const filterDoneButton = document.getElementById("all-done");

filterAllButton.addEventListener("click", () => {
  const todoItems = document.querySelectorAll("#list-container li");
  todoItems.forEach(todo => {
    todo.style.display = "";
  });
});

filterPendingButton.addEventListener("click", () => {
  const todoItems = document.querySelectorAll("#list-container li");
  todoItems.forEach(todo => {
    if (todo.classList.contains("checked")) {
      todo.style.display = "none";
    } else {
      todo.style.display = "";
    }
  });
});

filterDoneButton.addEventListener("click", () => {
  const todoItems = document.querySelectorAll("#list-container li");
  todoItems.forEach(todo => {
    if (todo.classList.contains("checked")) {
      todo.style.display = "";
    } else {
      todo.style.display = "none";
    }
  });
});

