'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['$scope', function($scope) {
    this.list = $scope.list || {};
    this.note = {};
    this.remove = $scope.remove;
    this.removeNote = () => {
      this.note.listId = this.listId;
      this.remove({note: this.note});
    };

  }]);

  app.directive('dsNote', function() {
    return {
      controller: 'NoteController',
      controllerAs: 'noteCtrl',
      template: require('./list_item_template.html'),
      // bindToController: true,
      scope: {
        remove: '&',
        note: '=',
        listId: '@'
      }

    };
  });
};