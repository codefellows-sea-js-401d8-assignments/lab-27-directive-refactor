'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$http', '$location', '$window', AuthController]);
};

function AuthController($http, $location, $window) {
  this.$http = $http;
  this.$location = $location;
  this.$window = $window;
  this.baseUrl = `${__API_URL__}`;
}

AuthController.prototype = {
  signup: function(user) {
    this.$http.post(this.baseUrl + '/api/signup', user)
      .then((res) => {
        console.log(res.data);
        this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
        this.$location.path('/notes');
      })
      .catch((err) => {
        console.log('error signup up: ', err);
      });
  },

  signin: function(user) {
    this.$http.get(this.baseUrl + '/api/signin', {
      headers: {
        'Authorization': `Basic ${this.$window.btoa(`${user.email}:${user.password}`)}`,
      },
    })
    .then((res) => {
      this.$http.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      this.$location.path('/notes');
      alert('logged in xD');
    })
    .catch(err => console.log(err));
  },
};
