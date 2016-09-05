'use strict';

module.exports = (app) => {
  app.controller('ListController', ['$log', '$http', ListController]);
};

function ListController($log, $http) {
  this.lists = [];
  this.getAllLists = function() {
    $http.get(this.baseUrl, this.config)
      .then(res => {
        this.lists = res.data;
      }, err => {
        $log.error('error!', err);
      });
  };

  this.destroyList = function(list) {
    $log.debug('listCtrl.destroyList');
    $http.delete(this.baseUrl + '/' + list._id, this.config)
      .then(res => {
        $log.log('success!', res.data);
        this.lists.splice(this.lists.indexOf(list), 1);
      }, err => {
        $log.error('error!', err);
      });
  };

  this.updateList = function(list) {
    $http.put(this.baseUrl + '/' + list._id, list, this.config)
      .then(res => {
        $log.log('success!', res.data);
        list.editing = false;
      }, err => {
        $log.error('error!', err);
      });
  };

  this.createList = function(list){
    $http.post(this.baseUrl, list, this.config)
      .then(res => {
        $log.log('Success!', res.data);
        this.lists.push(res.data);
        $log.log('this.lists', this.lists);
      })
      .catch(err => {
        $log.log('Error: ', err);
      });
  };

}
