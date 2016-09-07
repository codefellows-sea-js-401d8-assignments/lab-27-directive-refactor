'use strict';

module.exports = (app) => {
  app.directive('kbNoteForm', function() {
    return {
      controller: 'NoteFormController',
      controllerAs: 'nfCtrl',
      template: require('./note-form-template.html'),
      transclude: true,
      scope: {
        noteButtonText: '@',
        saveNote: '&',
        note: '=',
      }
    };
  });
};
