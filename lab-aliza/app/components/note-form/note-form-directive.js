'use strict';

module.exports = (app) => {
  app.directive('apNoteFormDirective', function() {
    return {
      controller: 'NoteFormController',
      controllerAs: 'ctrl',
      template: require('./note-form-template.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        save: '&',
        listId: '='
      }
    };
  });
};
