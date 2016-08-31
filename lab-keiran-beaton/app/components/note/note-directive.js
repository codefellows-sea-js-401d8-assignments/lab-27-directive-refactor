'use strict';

module.exports = function(app) {
  app.directive('kbNote', function() {
    return {
      controller: 'NoteController',
      controllerAs: 'noteCtrl',
      template: require('./note-template.html'),
      bindToController: true,
      scope: {
        noteUrl: '@',
        config: '=',
        list: '='
      }
    };
  });
};
