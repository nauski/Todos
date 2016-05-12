var todos = {
    todosList: [],
    toggleAllTodos: function() {
        var totalTodos = this.todosList.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (this.todosList[i].completed === true) {
                completedTodos++
            }
        }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < this.todosList.length; i++) {
                this.todosList[i].completed = false;
            }
        } else {
            for (var i = 0; i < this.todosList.length; i++) {
                this.todosList[i].completed = true;
            }

        }
        this.readTodos(this.todosList);
    },
    toggleCompleted: function(todonum) {
        var todo = this.todosList[todonum];
        todo.completed = !todo.completed;
        this.readTodos(this.todosList);
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
        var toggleButton, completedInfo;
        if(this.todosList.length !== 0){
        for (var x = 0, y = todosList.length; x < y; x++) {
            if (todosList[x].completed) {
                completedInfo = "[X]";
            } else {
                completedInfo = "[ ]";
            }
            line += "<li id=" + todosList[x] + ">" + completedInfo + " " + todosList[x].name + "</li> <br>";
        }
      } else {
            line = "Todo's list is empty";
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
    todos.toggleAllTodos();
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

todos.readTodos();
