'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const listApp = require('angular').module('listApp', [require('angular-route')]);

require('./controllers/controllers-index.js')(listApp);
require('./components/components-index.js')(listApp);

listApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    template: require('./html/home.html')
  })
  .when('/signup', {
    template: require('./html/signup.html')
  })
  .when('/signin', {
    template: require('./html/signin.html')
  })
  .otherwise('/');
}]);
