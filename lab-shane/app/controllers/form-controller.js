'use strict';

module.exports = function(app){
  app.controller('FormController', ['$scope', function($scope){
    this.list = $scope.list || {};
    this.borrow = $scope.borrow;
    this.buttonCommand = $scope.buttonCommand;
    this.saveOrReset = ()=> {
      this.borrow({list: this.list});
      if (!$scope.list) this.list = null;
    };
  }]);
};
