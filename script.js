var todos = {
    todosList: [],

    createTodos: function(name) {
        var todoName = prompt("Description?");
        var todo = {
            name: todoName,
            completed: false
        };
        this.todosList.push(todo);
        this.readTodos();
    },
    readTodos: function() {
        for (var x = 0, y = this.todosList.length; x < y; x++) {
            console.log("#" + (x + 1), this.todosList[x].name, "\t \t \t [ ]");
        }
    },

    updateTodos: function() {
        var num = prompt("Which one?");
        var info = prompt("Description?");
        this.todosList[num].name = info;
        this.readTodos();
    },
    deleteTodos: function() {
        var num = prompt("Which one?");
        this.todosList.splice(num, 1);
        this.readTodos();
    }


}

var createTodoButton = document.getElementById("createTodo").addEventListener("click", function() {
    todos.createTodos();
});
var updateTodoButton = document.getElementById("updateTodo").addEventListener("click", function() {
    todos.updateTodos();
});
var deleteTodoButton = document.getElementById("deleteTodo").addEventListener("click", function() {
    todos.deleteTodos();
});
