'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let listApp = angular.module('listApp', [require('angular-route')]);

require('./components')(listApp);
require('./controllers')(listApp);

listApp.config(['$routeProvider', ($rp) => {
  $rp
    .when('/', {
      template: require('./html/notes.html')
    })
    .when('/signup', {
      template: require('./html/sign-up.html')
    })
    .when('/signin', {
      template: require('./html/sign-in.html')
    })
    .otherwise({
      redirectTo: 'index'
    });
}]);
