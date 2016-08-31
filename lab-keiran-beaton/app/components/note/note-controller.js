'use strict';

module.exports = function(app) {
  app.controller('ListItemController', ['$scope', '$log', '$http', function($scope, $log) {
    this.list = $scope.list || {};
    this.list.notes = [];

    this.createNote = (note) => {
      $log.debug('itemCtrl.createNote');
      note.listId = this.list._id;
      this.list.notes.push(note);
    };

    this.deleteNote = (note) => {
      $log.debug('itemCtrl.deleteNote');
      this.list.notes.splice(this.list.notes.indexOf(note), 1);
    };
  }]);
};
