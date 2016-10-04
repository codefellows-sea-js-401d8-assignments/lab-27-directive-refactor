'use strict';

module.exports = function(app) {
  app.controller('NoteFormController', ['$scope', function($scope) {
    this.note = $scope.note || {};
    this.save = $scope.save;
    this.list = $scope.list;
    this.saveAndNull = () => {
      this.note.listId = this.list._id;
      this.save({note: this.note});
      this.note = null;
    };
  }]);

  app.directive('dsNoteForm', function() {
    return {
      controller: 'NoteFormController',
      controllerAs: 'noteFormCtrl',
      template: require('./note_form_template.html'),
      transclude: true,
      scope: {
        save: '&',
        list: '='
      }
    };
  });
};