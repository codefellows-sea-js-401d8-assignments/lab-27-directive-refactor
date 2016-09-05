'use strict';

module.exports = function(app) {
  app.component('naNoteApp', {
    controller: 'NoteAppController',
    template: require('./note-app.html'),
    // bindings: {
    //   title: '@',
    //   notes: '<',
    // },
  });
};
