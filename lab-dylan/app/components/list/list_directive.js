'use strict';

module.exports = function(app) {
  app.directive('dsList', function() {
    return {
      controller: 'ListController',
      controllerAs: 'listCtrl', 
      bindToController: true,
      template: require('./list_template.html'),
      scope: {
        baseUrl: '@',
        config: '='
      }
    };
  });
};