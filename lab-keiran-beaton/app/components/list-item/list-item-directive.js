'use strict';

module.exports = function(app) {
  app.directive('kbListItem', function() {
    return {
      controller: 'ListItemController',
      controllerAs: 'itemCtrl',
      template: require('./list-item-template.html'),
      bindToController: true,
      scope: {
        title: '=',
        text: '=',
        save: '&'
      }
    };
  });
};
