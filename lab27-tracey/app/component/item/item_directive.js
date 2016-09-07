'use strict';

module.exports = function(app){
  app.directive('itemDirective', function(){
    return {
      controller: 'ItemDirectiveController',
      controllerAs: 'itemCtrl',
      template: require('./item_directive.html'),
      bindToController: true,
      scope: {
        baseUrl: '@',
        config: '=',
        listId: '=',
        list: '='
      }
    };
  });
};
