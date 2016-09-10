'use strict';

module.exports = function(app) {
  app.directive('dsListItem', function() {
    return {
      controller: 'ListItemController',
      controllerAs: 'listItemCtrl',
      template: require('./list_item_template.html'),
      require: '^dsList',
      scope: {
        list: '=',
        save: '&',
        config: '='
      }

    };
  });
};