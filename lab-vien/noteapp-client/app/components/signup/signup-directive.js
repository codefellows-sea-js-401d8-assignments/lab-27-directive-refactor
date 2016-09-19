'use strict';

module.exports = function(app) {
  app.component('naSignUp', {
    controller: 'AuthController',
    template: require('./signup.html'),
  });
};
