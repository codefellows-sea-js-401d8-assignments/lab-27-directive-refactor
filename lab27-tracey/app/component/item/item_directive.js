'use strict';

module.exports = function(app){
  app.directive('itemDirective', function(){
    return {
      controller: 'ItemDirectiveController',
      controllerAs: 'itemCtrl',
      template: require('./item_directive.html'),
      require: '^listDirective',
      scope: {
        baseUrl: '@',
        config: '=',
        save: '&',
        list: '='
      }
    };
  });
};
