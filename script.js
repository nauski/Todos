var todos = {
    todosList: [],

    createTodos: function(name) {
        var todo = {name: name, completed: false};
        this.todosList.push(todo);
        this.readTodos();
    },
    readTodos: function() {
        for (var x = 0, y = this.todosList.length; x < y; x++) {
            console.log("#" + (x + 1), this.todosList[x].name, "\t \t \t [ ]");
        }
    },

    updateTodos: function(num, info) {
      this.todosList[num].name = info;
      this.readTodos();
    },
    deleteTodos: function(num) {
      this.todosList.splice(num, 1);
      this.readTodos();
    }


}
