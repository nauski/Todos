var todos = {
    todosList: [],

    toggle: function() {

    },
    createTodos: function(name) {
        var todoName = prompt("Description?");
        var todo = {
            name: todoName,
            completed: false
        };
        this.todosList.push(todo);
        this.readTodos(this.todosList);
    },
    readTodos: function(todosList) {
        var line = "";
        var toggleButton;
        for (var x = 0, y = todosList.length; x < y; x++) {
            if (todosList[x].completed) {
                toggleButton = "Y";
            } else {
                toggleButton = "N";
            }
            line += "<button id=" + "btn" + todosList[x] + ">" + toggleButton + "</button> " + todosList[x].name + "<br>";
        }
        document.getElementById("todoList").innerHTML = line;
    },
    updateTodos: function() {
        var num = prompt("Which one?");
        var info = prompt("Description?");
        this.todosList[num].name = info;
        this.readTodos(this.todosList);
    },
    deleteTodos: function() {
        var num = prompt("Which one?");
        this.todosList.splice(num, 1);
        this.readTodos(this.todosList);
    }


}
var toggle = document.getElementById("toggle").addEventListener("click", function() {
    todos.toggle();
});
var createTodoButton = document.getElementById("createTodo").addEventListener("click", function() {
    todos.createTodos();
});
var updateTodoButton = document.getElementById("updateTodo").addEventListener("click", function() {
    todos.updateTodos();
});
var deleteTodoButton = document.getElementById("deleteTodo").addEventListener("click", function() {
    todos.deleteTodos();
});
