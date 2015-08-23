describe('ToDoListController', function() {
  beforeEach(module('ToDoListApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty entry field and results list', function() {
    expect(ctrl.toDoListResult).toBeUndefined();
    expect(ctrl.addListItem).toBeUndefined();
  });

});