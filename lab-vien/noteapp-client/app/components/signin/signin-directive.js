'use strict';

module.exports = function(app) {
  app.component('naSignIn', {
    controller: 'AuthController',
    template: require('./signin.html'),
  });
};
