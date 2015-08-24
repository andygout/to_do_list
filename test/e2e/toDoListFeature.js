describe('To Do List creator', function() {

  var entryField = element(by.model('toDoCtrl.newTask'));
  var addButton = element(by.id('addButton'));
  var tasks = element.all(by.repeater('task in toDoCtrl.taskArray'));
  var displayAllTasksButton = element(by.id('displayAllTasksButton'));
  var displayActiveTasksButton = element(by.id('displayActiveTasksButton'));
  var displayCompleteTasksButton = element(by.id('displayCompleteTasksButton'));
  var clearCompleteTasksButton = element(by.id('clearCompleteTasksButton'));
  var clearAllTasksButton = element(by.id('clearAllTasksButton'));

  beforeEach(function() {
    browser.get('http://localhost:3000');
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

  it('can display a count of tasks', function() {
    addTasks(['practise violin', 'buy potatoes']);
    expect(element(by.id('taskCount')).getText()).toContain('Tasks: 2');
  })

  it('can disable filter to display all tasks', function() {
    addTasks(['practise violin', 'buy potatoes', 'do exercises', 'feed dog']);
    displayCompleteTasksButton.click();
    displayAllTasksButton.click();
    expect(tasks.count()).toEqual(4);
  })

  it('can apply filter to display complete tasks', function() {
    addTasks(['practise violin', 'buy potatoes', 'do exercises', 'feed dog']);
    displayCompleteTasksButton.click();
    expect(tasks.count()).toEqual(0);
  })

  it('can apply filter to display active tasks', function() {
    addTasks(['practise violin', 'buy potatoes', 'do exercises', 'feed dog']);
    element(by.model('task.complete')).click();
    displayActiveTasksButton.click();
    expect(tasks.count()).toEqual(3);
  })

  var addTasks = function(tasks) {
    tasks.forEach(function(task) {
      entryField.sendKeys(task);
      addButton.click();
    });
  };

})