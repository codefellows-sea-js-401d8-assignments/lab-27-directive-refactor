'use strict';

module.exports = function(app) {
  app.component('naList', {
    controller: 'ListController',
    template: require('./list.html'),
    bindings: {
      list: '=',
    },
  });
};
