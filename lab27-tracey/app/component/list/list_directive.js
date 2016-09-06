'use strict';

module.exports = (app) =>{
  app.directive('listDirective', function(){
    return {
      controller: 'ListController',
      controllerAs: 'listCtrl',
      template: require('./list_directive.html'),
      bindToController: true,
      scope: {
        baseUrl: '@',
        config: '='
      }
    };
  });
};
