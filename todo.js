const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoForm input")
const todoList = document.querySelector("#todoList")

let toDos = []
const TODOS_KEY = "todos"
function saveTodoList (){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event){
    const li = event.target.parentElement
    li.remove(); 
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
    saveTodoList()
}

function writeTodo(newToDo){
    const li = document.createElement("li")
    li.id = newToDo.id
    const span = document.createElement("span")
    span.innerText = newToDo.text;
    const button = document.createElement("button")
    button.innerText = 'X'
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

function handleToDoList(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";

    const todoObj = {
        text : newToDo,
        id : Date.now()
    }
    toDos.push(todoObj)
    writeTodo(todoObj)
    saveTodoList()
}


todoForm.addEventListener("submit", handleToDoList)

const saveTodo = localStorage.getItem(TODOS_KEY)

if(saveTodo !== null){
    const parsedTodo = JSON.parse(saveTodo)
    toDos = parsedTodo;
    parsedTodo.forEach(writeTodo)
}   