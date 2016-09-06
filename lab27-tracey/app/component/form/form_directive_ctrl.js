'use strict';

module.exports = (app) =>{
  app.controller('FormDirectiveController', ['$scope', function($scope){
    this.list = $scope.list || {};
    this.save = $scope.save;
    this.buttonText = $scope.buttonText;
    this.saveAndNull = ()=>{
      this.save({list: this.list});
      if(!$scope.list) this.list = null;
    };
  }]);
};
