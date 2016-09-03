'use strict';

module.exports = function(app) {
  app.directive('apListDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./list-template.html'),
      controller: 'ListController',
      controllerAs: 'listCtrl',
      bindToController: true,
      scope: {}
    };
  });
};
