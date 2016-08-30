'use strict';

module.exports = (app) => {
  app.controller('ListController', ['$log', '$http', ListController]);
};


function ListController($log, $http) {
  this.lists = [];


  this.getAllLists = function() {
    $log.debug('listCtrl.getAllLists');
    $http.get(this.baseUrl, this.httpConfig)
      .then(res => {
        $log.log('resolve', res);
        this.lists = res.data;
      }, err => {
        $log.error('reject', err);
      });
  };


  this.deleteList = function(list) {
    $log.debug('listCtrl.deleteList');
    $http.delete(`${this.baseUrl}/${list._id}`, this.httpConfig)
      .then(res => {
        $log.log('resolve', res);
        this.lists.splice(this.lists.indexOf(list), 1);
      }, err => {
        $log.error('reject', err);
      });
  };


  this.updateList = function(list) {
    $log.debug('listCtrl.updateList');
    $http.put(`${this.baseUrl}/${list._id}`, list, this.httpConfig)
      .then(res => {
        $log.log('resolve', res);
        list.editing = false;
      }, err => {
        $log.error('reject', err);
      });
  };


  this.createList = function(list) {
    $log.debug('listCtrl.createList');
    $http.post(this.baseUrl, list, this.httpConfig)
      .then(res => {
        $log.log('resolve', res.data);
        this.lists.push(res.data);
      })
      .catch(err => {
        $log.error('reject', err);
      });
  };
}
