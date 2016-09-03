'use strict';

module.exports = function(app) {
  app.directive('apFormDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./form-template.html'),
      controller: 'ListController',
      controllerAs: 'list',
      bindToController: true,
      scope: {}
    };
  });
};
