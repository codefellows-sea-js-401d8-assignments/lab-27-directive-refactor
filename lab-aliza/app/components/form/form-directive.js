'use strict';

module.exports = (app) => {
  app.directive('apFormDirective', function() {
    return {
      controller: 'FormController',
      controllerAs: 'ctrl',
      template: require('./form-template.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        save: '&',
        list: '='
      }
    };
  });
};
