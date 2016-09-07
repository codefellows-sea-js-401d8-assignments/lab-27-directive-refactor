'use strict';

module.exports = function(app) {
  app.directive('shNote', function() {
    return {
      restrict: 'EAC',
      template: require('./note-template.html'),
      controller: 'NoteController',
      controllerAs: 'nc',
      bindToController: true,
      scope: {
        list: '=',
        borrow: '&',
        note: '='
      }
    };
  });
};
