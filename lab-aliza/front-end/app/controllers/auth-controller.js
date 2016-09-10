'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', 'auth', function($http, $location, $window, auth) {
    if (auth.getToken({noRedirect: true}), $location.path('/notes'));
    let baseUrl = `${__API_URL__}/api`;
    this.signup = function(user) {
      $http.post(baseUrl + '/signup', user)
        .then((res) => {
          auth.setToken(res.data.token);
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
          auth.setToken(res.data.token);
          $location.path('/');
        }, (err) => {
          console.log(err);
        });
    };

    this.getUser = auth.getUser.bind(auth);
    this.logOut = auth.logOut.bind(auth);
    this.currentUser = auth.currentUser;

  }]);
};
