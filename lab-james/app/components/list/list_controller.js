'use strict';

module.exports = function(app) {
  app.controller('ListController', ['$log', '$http', function($log, $http) {
    $log.log('list controller');
    this.baseUrl = `${__API_URL__}/api/list`;
    this.config = {
      'Accept': 'Application/json',
      'Content-Type': 'Application/json'
    };

    this.getLists = function() {
      $log.log('getLists function');
      $http.get(this.baseUrl)
        .then((res) => {
          $log.log('res data: ' + res.data);
        })
        .catch((err) => {
          $log.log('Error in getting lists: ' + err);
        });
    };
  }]);
};
