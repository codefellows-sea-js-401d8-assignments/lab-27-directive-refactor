'use strict';

module.exports = function(app) {
  app.controller('NoteFormController', ['$scope', function($scope) {
    console.log('note form controller');
    this.list = $scope.list;
    this.note = $scope.note;
    this.buttonCommand = $scope.buttonCommand;
    this.borrow = $scope.borrow;
    this.saveOrResetBoth = ()=>{
      console.log('save or reset both');
      this.borrow({note: this.note});
      console.log('borrowing');
      // if(!$scope.list) this.list = null;
      if(!$scope.note) this.note = null;
      this.note.listId = $scope.list._id;
    };
  }]);
};
