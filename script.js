var todoList = [];

function addTodo() {
  var todoInput = document.getElementById('todoInput');
  var task = todoInput.value;

  if (task.trim() !== '') {
    todoList.push(task);
    todoInput.value = '';
    displayTodos();
  }
}

function removeTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}

function displayTodos() {
  var todoListElement = document.getElementById('todoList');
  todoListElement.innerHTML = '';

  for (var i = 0; i < todoList.length; i++) {
    var todoItem = document.createElement('li');
    todo
