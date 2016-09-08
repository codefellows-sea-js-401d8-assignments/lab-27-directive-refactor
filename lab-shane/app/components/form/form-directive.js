'use strict';

module.exports = function(app) {
  app.directive('shForm', function() {
    return {
      restrict: 'EAC',
      template: require('./form-template.html'),
      controller: 'FormController',
      controllerAs: 'fc',
      transclude: true,
      scope: {
        list: '=',
        borrow: '&',
        buttonCommand: '@',
        inputValue: '@'
      }
    };
  });
};
