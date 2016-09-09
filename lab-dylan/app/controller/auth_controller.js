'use strict';


module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', 'auth', '$log', function($http, $location, $window, auth, $log) {
    if (auth.getToken({noRedirect: true})) $location.path('/notes');
    
    this.signup = function(user) {
      $http.post(this.baseUrl + '/api/signup', user)
      .then(res => {
        $log.log('success!', res.data);
        auth.setToken(res.data.token);
        $location.path('/notes');
      })
      .catch( err => {
        $log.error('error!', err);
        alert('Invalid data');
      });
    };

    this.signin = function(user) {
      $http.get(this.baseUrl + '/api/signin', {
        headers: {
          'Authorization': 'Basic ' + $window.btoa(user.username + ':' + user.password)
        }
      }).then(res => {
        $log.log('success', res.data);
        auth.setToken(res.data.token);
        $location.path('/notes');
      }, err => {
        $log.log('error', err);
        console.log('error ' + err.status);
      });
    };

    this.getUser = auth.getUser.bind(auth);
    this.logOut = auth.logOut.bind(auth);
    this.currentUser = auth.currentUser;
  }]);
};