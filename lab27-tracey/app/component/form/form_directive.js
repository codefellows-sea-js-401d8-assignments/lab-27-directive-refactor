'use strict';

module.exports = (app)=>{
  app.directive('formDirective', function(){
    return {
      controller: 'FormDirectiveController',
      controllerAs: 'ctrl',
      template: require('./form_directive.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        save: '&',
        list: '='
      }
    };
  });
};
