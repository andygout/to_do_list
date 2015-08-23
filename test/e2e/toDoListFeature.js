describe('To Do List creator', function() {

  var entryField = element(by.model('toDoCtrl.newTask'));
  var addButton = element(by.id('addButton'));
  var tasks = element.all(by.repeater('task in toDoCtrl.taskArray'));
  var clearCompleteTasksButton = element(by.id('clearCompleteTasksButton'));
  var clearAllTasksButton = element(by.id('clearAllTasksButton'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  })

  it('can add and display a task', function() {
    addTasks(['practise violin']);
    expect(tasks.first().getText()).toContain('practise violin');
  });

  it('can add and display a task', function() {
    addTasks(['practise violin']);
    expect(tasks.first().getText()).toContain('practise violin');
  });

  it('can add and display two tasks in ascending chronological order', function() {
    addTasks(['practise violin', 'buy potatoes']);
    expect(tasks.last().getText()).toContain('buy potatoes');
  });

  it('can count number of tasks', function() {
    addTasks(['practise violin', 'buy potatoes']);
    expect(tasks.count()).toEqual(2);
  })

  it('can clear all tasks', function() {
    addTasks(['practise violin', 'buy potatoes']);
    clearAllTasksButton.click();
    expect(tasks.count()).toEqual(0);
  })

  it('can clear complete tasks', function() {
    addTasks(['practise violin', 'buy potatoes']);
    element(by.model('task.complete')).click();
    clearCompleteTasksButton.click();
    expect(tasks.count()).toEqual(1);
  })

  var addTasks = function(tasks) {
    tasks.forEach(function(task) {
      entryField.sendKeys(task);
      addButton.click();
    });
  };

})