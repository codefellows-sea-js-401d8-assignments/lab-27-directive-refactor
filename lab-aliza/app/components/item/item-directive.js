'use strict';

module.exports = (app) => {
  app.directive('apItemDirective', function() {
    return {
      controller: 'ListController',
      controllerAs: 'listCtrl',
      template: require('./item-template.html'),
      bindToController: true,
      scope: {
        baseUrl: '@',
        config: '='
      }
    };
  });
};
