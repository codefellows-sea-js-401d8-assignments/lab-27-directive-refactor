'use strict';

module.exports = function(app) {
  app.component('naNoteAppForm', {
    controller: 'NoteAppFormController',
    template: require('./note-app-form.html'),
  });
};
