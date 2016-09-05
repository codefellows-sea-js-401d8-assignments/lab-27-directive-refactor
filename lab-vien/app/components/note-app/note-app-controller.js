'use strict';

module.exports = function(app) {
  app.controller('NoteAppController', ['listService', NoteAppController]);
};

function NoteAppController(listService) {
  this.appName = 'Vien\'s List App';
  listService.getLists()
    .then(lists => {
      this.lists = lists;
    });
}
