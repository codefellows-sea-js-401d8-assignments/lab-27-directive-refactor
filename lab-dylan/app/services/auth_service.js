'use strict';

module.exports = function(app) {
  app.factory('auth', ['$window', 'jwtHelper', '$location', function($window, jwt, $location) {
    return {
      currentUser: {},
      getToken: function(opts) {
        opts = opts || {};
        if (this.token) return this.token;
        if ($window.localStorage.token) return this.setToken($window.localStorage.token);
        if (!opts.noRedirect) $location.path('/signup');
      },
      setToken: function(token) {
        $window.localStorage.token = token;
        this.token = token;
        this.getUser();
        return token;
      },
      getUser: function() {
        let token = this.getToken();
        if (!token) return;
        let deciphered = jwt.decodeToken(token);
        this.currentUser.username = deciphered.username;
        return this.currentUser;
      },
      logOut: function() {
        $window.localStorage.token = '';
        this.currentUser = '';
        this.token = '';
        $location.path('/signin');
      }
    };
  }]);
};