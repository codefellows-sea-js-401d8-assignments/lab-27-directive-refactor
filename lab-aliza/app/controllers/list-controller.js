'use strict';

const angular = require('angular');
const listApp = angular.module('listApp');

listApp.controller('ListController', ['$log', '$http', ListController]);

function ListController($log, $http){
  this.lists = [];

  this.createList = function(list){
    $log.debug('listCtrl.createList');
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

  this.destroyList = function(id){
    $http.delete(this.baseUrl + '/' + id, this.config)
      .then(res => {
        let index = this.lists.findIndex((item)=>{
          return item._id === id;
        });
        this.lists.splice(index, 1);
        $log.log('Success!', res.data);
        $log.log('this.lists', this.lists);
      })
      .catch(err => {
        $log.log('Error: ', err);
      });
  };

  this.getLists = function() {
    $http.get(this.baseUrl, this.config)
      .then((res) => {
        $log.log('Success!', res.data);
        res.data.forEach((list) => {
          this.lists.push(list);
        });
      })
      .catch((err) => {
        $log.log('Error: ', err);
      });
  };
}
