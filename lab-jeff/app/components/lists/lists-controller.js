'use strict';

module.exports = (app) => {
  app.controller('ListsController', ['$log', '$http', ListsController]);
};

function ListsController($log, $http) {
  this.lists = [];

  let baseUrl = 'http://localhost:3000/api/list/';
  let config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  this.deleteLocalList = function(listId){
    this.lists = this.lists.filter((list) => {
      return list._id !== listId;
    });
  };

  this.getAllLists = function() {
    $http.get(baseUrl, config)
      .then((res) => {
        $log.log('Success!', res.data);
        res.data.forEach((list) => {
          this.lists.push(list);
        });
      })
      .catch((err) => {
        return err;
      });
  };

  this.deleteAllLists = function() {
    $http.delete(baseUrl, config)
      .then((res) => {
        $log.log('Success!', res.data);
        this.lists = [];
      })
      .catch((err) => {
        return err;
      });
  };

  this.createList = function(listName) {
    $http.post(baseUrl, listName, config)
      .then((res) => {
        $log.log('Success!', res.data);
        this.lists.push(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  this.deleteList = function(listId) {
    $http.delete(baseUrl + listId, config)
      .then((res) => {
        $log.log('Success', res.data);
        this.deleteLocalList(listId);
      })
      .catch((err) => {
        return err;
      });
  };
}
