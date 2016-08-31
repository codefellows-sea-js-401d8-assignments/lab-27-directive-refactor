'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['$scope', '$log', function($scope, $log) {
    this.list = $scope.list || {};
    this.list.notes = [];

    this.createNote = (note) => {
      $log.debug('noteCtrl.createNote');
      note.listId = this.list._id;
      this.list.notes.push(note);
    };

    this.deleteNote = (note) => {
      $log.debug('noteCtrl.deleteNote');
      this.list.notes.splice(this.list.notes.indexOf(note), 1);
    };
  }]);
};
