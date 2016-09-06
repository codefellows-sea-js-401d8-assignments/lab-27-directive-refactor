'use strict';

module.exports = function(app) {
  app.controller('ListController', ['$log', '$http', ListController]);
};

function ListController($log, $http) {
  this.lists = [];
  this.notes = []; // Unnecessary but since I added the get method for the implemented route I figured I should add this as well
  

  // List CRUD methods
  this.getLists = function() {
    $log.debug('listCtrl : getLists()');
    $http.get(`${this.baseUrl}`, this.config)
      .then( res => {
        $log.log('succes', res.data);
        this.lists = res.data;
      }, err => {
        $log.error('error', err);
      });

  };

  this.removeList = function(list) {
    $log.debug('listCtrl : removeList()');
    $http.delete(`${this.baseUrl}/${list._id}`)
      .then(res => {
        $log.log('success', res.data);
        this.lists.splice(this.lists.indexOf(list), 1);
      }, err => {
        $log.error('error', err);
      });
  };

  this.updateList = function(list) {
    $log.debug('listCtrl : updateList()');
    $http.put(`${this.baseUrl}/${list._id}`, list, this.config)
      .then(res => {
        $log.log('succes', res.data);
        list.editing = false;

      }, err => {
        $log.error('error', err);
      });
  };

  this.addList = function(list) {
    $log.debug('listCtrl : addlist()');
    $http.post(`${this.baseUrl}`, list, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.lists.push(res.data);
      }, err => {
        $log.error('error', err);
      });
  };
}