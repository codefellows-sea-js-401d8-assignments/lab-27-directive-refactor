'use strict';

module.exports = function(app) {
  app.component('signOut', {
    controller: 'AuthController',
    template: require('./sign_out_template.html')
  });
};