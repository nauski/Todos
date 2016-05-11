var todos = {
    todosList: [],

    createTodos: function(name) {
        this.todosList.push(name);
    },
    readTodos: function() {
        for(var x = 0, y = this.todosList.length; x < y; x++){
          console.log("[ ]", this.todosList[x]);
        }
    },

    updateTodos: function() {

    },
    deleteTodos: function() {

    }


}
