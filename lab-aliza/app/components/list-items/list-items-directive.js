'use strict';

module.exports = function(app) {
  app.directive('apListItemDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./list-items-template.html'),
      controller: 'ListController',
      controllerAs: 'list',
      bindToController: true,
      scope: {}
    };
  });
};
