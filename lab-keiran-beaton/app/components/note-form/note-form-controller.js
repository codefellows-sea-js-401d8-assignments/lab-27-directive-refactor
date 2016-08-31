'use strict';

module.exports = function(app) {
  app.controller('NoteFormController', ['$scope', function($scope) {
    this.note = $scope.note || {};
    this.saveNote = $scope.saveNote;
    this.noteButtonText = $scope.noteButtonText;
    this.saveNoteAndNull = () => {
      this.saveNote({note: this.note});
      if($scope.note) this.note = null;
    };
  }]);
};
