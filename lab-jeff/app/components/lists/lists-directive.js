'use strict';

module.exports = (app) => {
  app.directive('jgListsDirective', function(){
    return {
      controller: 'ListsController',
      controllerAs: 'listsCtrl',
      template: require('./lists-directive-template.html'),
      bindToController: true,
      scope: {
        name: '@',
        _id: '@',
      },
    };
  });
};
