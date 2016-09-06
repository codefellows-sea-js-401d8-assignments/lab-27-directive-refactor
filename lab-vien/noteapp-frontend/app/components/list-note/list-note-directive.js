'use strict';

module.exports = function(app) {
  app.component('naListNote', {
    controller: 'ListNoteController',
    template: require('./list-note.html'),
    bindings: {
      note: '=',
      deleteNote: '&',
    },
  });
};
