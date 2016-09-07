'use strict';

module.exports = function(app){
  app.component('shSignin', {
    controller: 'AuthController',
    template: require('./signin-template.html')
  });
};
