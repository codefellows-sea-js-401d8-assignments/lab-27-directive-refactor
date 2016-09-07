'use strict';

module.exports = (app) => {
  app.component('signIn', {
    controller: 'AuthController',
    templates: require('./sign-in-template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
