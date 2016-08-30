'use strict';

module.exports = (app) => {
  app.directive('naList', function() {
    return {
      restrict: 'EA',
      controller: 'ListController',
      controllerAs: 'listCtrl',
      template: require('./list.html'),
      bindToController: true,
      scope: {
        baseUrl: '@',
        config: '=',
      },
    };
  });
};
