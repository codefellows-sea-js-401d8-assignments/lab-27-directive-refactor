'use strict';

module.exports = (app) => {
  app.controller('NoteFormController', ['$scope', function($scope) {
    this.note = $scope.note || {};
    this.save = $scope.save;
    this.listId = $scope.listId;
    this.buttonText = $scope.buttonText;
    this.saveAndNull = () => {
      this.save({note: {name: this.note.name, listId: this.listId, content: this.note.content }});
      if (!$scope.note) this.note = null;
    };
  }]);
};
