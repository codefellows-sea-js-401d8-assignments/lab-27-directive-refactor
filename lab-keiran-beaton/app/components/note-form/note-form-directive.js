'use strict';

module.exports = function(app) {
  app.directive('kbNoteForm', function() {
    return {
      controller: 'NoteFormController',
      controllerAs: 'nfCtrl',
      template: require('./note-form-template.html'),
      scope: {
        noteButtonText: '@',
        saveNote: '&',
        note: '='
      }
    };
  });
};
