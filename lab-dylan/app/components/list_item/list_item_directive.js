'use strict';

module.exports = function(app) {
  app.component('noteItem', function() {
    return {
      controller: 'ListController',
      template: require('./list_item_template.html'),
      bindings: {
        list: '<',
        config: '<',
        baseUrl: '@'
      }

    };
  });
};