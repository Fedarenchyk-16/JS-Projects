const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const searchButton = document.querySelector(".search-button");

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

searchButton.addEventListener('click', filterTodo);

function addTodo(event) {
    event.preventDefault();
    console.log("click");

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    e.preventDefault();

    let sel = document.getElementById('selecter');
    let val = sel.options[sel.selectedIndex].value;

    const todos = todoList.childNodes;
    for (let i = 1; i < todos.length; i++) {
        let todo = todos[i];
        switch (val) {
            case "all":
                todo.style.display = 'flex';
                console.log("all");
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = 'flex';
                    console.log("com fl");
                } else {
                    todo.style.display = 'none';
                    console.log("com none");
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = 'flex';
                    console.log("un fl");
                } else {
                    todo.style.display = 'none';
                    console.log("un none");
                }
                break;
        }
    }
}


