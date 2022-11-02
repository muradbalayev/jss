const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)


//! fuction
function addTodo(e) {

    e.preventDefault();

    if(todoInput.value.trim().length=='')
    return;
   
        //div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    //create todo li
const newTodo = document.createElement("li")
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo)

    //minus button
    const removeButton = document.createElement("button");
        removeButton.innerHTML = "<i class='fa fa-minus-circle'></i>";
        removeButton.classList.add("remove-btn");
        todoDiv.appendChild(removeButton);

//list
todoList.appendChild(todoDiv);
todoInput.value =  "";
    }
    
function deleteCheck(e){
    const item = e.target

    //delete to do
    if(item.classList[0] === "remove-btn"){
       const todo = item.parentElement;
       todo.remove();
    }
}