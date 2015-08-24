toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.taskArray = []

  self.addTask = function() {
    if(self.newTask) {
      var task = {"descr": self.newTask,
                  "complete": false}
      self.taskArray.push(task);
      self.newTask = '';
    }
  }

  self.clearCompleteTasks = function() {
    arr = self.taskArray
    self.taskArray = []
    arr.forEach(function(task) {
      if(task.complete === false) {
        self.taskArray.push(task);
      }
    });
  };

  self.clearAllTasks = function() {
    self.taskArray = []
  }

}]);