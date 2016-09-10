'use strict';

module.exports = function(app) {
  app.component('list', function() {
    return {
      controller: 'ListController',
      template: require('./list_template.html'),
      bindings: {
        baseUrl: '@',
        config: '='
      }
    };
  });
};