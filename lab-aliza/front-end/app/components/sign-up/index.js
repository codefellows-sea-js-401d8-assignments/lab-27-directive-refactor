'use strict';

module.exports = (app) => {
  app.component('signUp', {
    controller: 'AuthController',
    templates: require('./sign-up-template.html'),
    bindings: {
      baseUrl: '<'
    }
  });
};
