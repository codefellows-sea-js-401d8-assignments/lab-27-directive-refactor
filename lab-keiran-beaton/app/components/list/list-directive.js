'use strict';

module.exports = function(app) {
  app.directive('kbList', function() {
    return {
      controller: 'ListController',
      controllerAs: 'listCtrl',
      template: require('./list-template.html'),
      bindToController: true,
      scope: {
        baseUrl: '@',
        config: '='
      }
    };
  });
};
