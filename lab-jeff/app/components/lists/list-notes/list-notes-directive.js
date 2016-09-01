'use strict';

module.exports = (app) => {
  app.directive('jgListNotesDirective', function(){
    return {
      controller: 'ListNotesController',
      controllerAs: 'listNotesCtrl',
      template: require('./list-notes-directive-template.html'),
    };
  });
};
