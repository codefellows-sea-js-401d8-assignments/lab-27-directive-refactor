'use strict';

module.exports = function(app){
  app.directive('shList', function(){
    return {
      restrict: 'EAC',
      template: require('./list-template.html'),
      controller: 'ListController',
      controllerAs: 'lc',
      bindToController: true,
      scope: {}
    };
  });
};
