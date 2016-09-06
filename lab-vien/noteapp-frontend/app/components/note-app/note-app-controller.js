'use strict';

module.exports = function(app) {
  app.controller('NoteAppController', ['$log', 'listService', NoteAppController]);
};

function NoteAppController($log, listService) {
  this.$log = $log;
  this.listService = listService;
  this.appName = 'Vien\'s Note List App';
}

NoteAppController.prototype = {
  createList: function(listData) {
    this.listService.createList(listData)
      .then(list => this.$log.debug(`NoteAppController.createList successful ${list.name}`))
      .catch(err => this.$log.debug(`NoteAppController.createList failed ${err.status}`));
  },

  getLists: function() {
    this.listService.getLists()
      .then(lists => {
        this.lists = lists;
      });
  },
};
