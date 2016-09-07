'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', function($http, $location, $window) {
    let baseUrl = `${__API_URL__}/api`;
    this.signup = function(user) {
      $http.post(baseUrl + '/signup', user)
        .then((res) => {
          $http.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
          $location.path('/');
        }, (err) => {
          console.log(err);
        });
    };

    this.signin = function(user) {
      $http.get(baseUrl + '/signin', {
        headers: {
          'Authorization': 'Basic ' + $window.btoa(user.email + ':' + user.password)
        }
      })
        .then((res) => {
          $http.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
          $location.path('/');
        }, (err) => {
          console.log(err);
        });
    };
  }]);
};
