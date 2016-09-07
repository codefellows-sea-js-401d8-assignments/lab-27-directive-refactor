'use strict';

module.exports = (app) => {
  app.directive('kbListForm', function() {
    return {
      controller: 'ListFormController',
      controllerAs: 'lfCtrl',
      template: require('./list-form-template.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        save: '&',
        list: '='
      }
    };
  });
};
