'use strict';

module.exports = function(app){
  app.component('shSignup', {
    controller: 'AuthController',
    template: require('./signup-template.html')
  });
};
