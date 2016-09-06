'use strict';

module.exports = function(app) {
  app.controller('ListController', ['$log', '$http', function($log, $http) {
    $log.log('list controller');
    this.baseUrl = `${__API_URL__}/api/list`;
    this.config = {
      'Accept': 'Application/json',
      'Content-Type': 'Application/json'
    };

    this.lists = [];

    this.getLists = function() {
      $log.log('getLists function');
      $http.get(this.baseUrl)
        .then((res) => {
          $log.log('res data: ' + res.data);
          let array = res.data;
          array.forEach((index) => {
            this.logList(index);
          });
        })
        .catch((err) => {
          $log.log('Error in getting lists: ' + err);
        });
    };

    this.createList = function(list) {
      $log.log('createList function');
      $http.post(this.baseUrl, list, this.config)
        .then((res) => {
          console.log('res.data: ' + res.data);
        })
        .then(this.getLists())
        .catch((err) => {
          $log.log('Error in creating list: ' + err);
        });
    };

    this.logList = function(list) {
      this.lists.push(list);
    };

  }]);
};
