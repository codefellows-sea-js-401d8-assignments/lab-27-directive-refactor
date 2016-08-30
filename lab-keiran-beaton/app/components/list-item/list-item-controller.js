'use strict';

module.exports = function(app) {
  app.controller('ListItemController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    this.list = $scope.list || {};
    this.list.notes = [];

    this.addNote = function() {

    };
  }]);
};
