'use strict';

module.exports = (app) => {
  app.controller('NoteFormController', ['$scope', function($scope) {
    this.note = $scope.note || {};
    this.save = $scope.save;
    this.buttonText = $scope.buttonText;
    this.saveAndNull = () => {
      this.save({note: this.note });
      if (!$scope.note) this.note = null;
    };
  }]);
};
