'use strict';

module.exports = (app) => {
  app.directive('jgAllListsDirective', function(){
    return {
      controller: 'AllListsController',
      controllerAs: 'allListsCtrl',
      template: require('./all-lists-directive-template.html'),
      bindToController: true,
      scope: {
        name: '@',
        _id: '@',
      },
    };
  });
};
