'use strict';

module.exports = (app) => {
  app.directive('apNoteDirective', function() {
    return {
      controller: 'NoteController',
      controllerAs: 'noteCtrl',
      template: require('./note-template.html'),
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
