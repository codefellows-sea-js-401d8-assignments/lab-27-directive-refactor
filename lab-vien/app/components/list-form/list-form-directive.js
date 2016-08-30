'use strict';

module.exports = function(app) {
  app.directive('naListForm', function() {
    return {
      restrict: 'EA',
      controller: 'ListFormController',
      controllerAs: 'listFormCtrl',
      template: require('./list-form.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        save: '&',
        list: '=',
      },
    };
  });
};
