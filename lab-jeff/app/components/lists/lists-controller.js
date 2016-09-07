'use strict';

module.exports = (app) => {
  app.controller('ListsController', ['$log', '$http', 'data', 'crud', ListsController]);
};

function ListsController($log, $http, data, crud) {
  this.lists = data.lists;

  this.deleteLocalList = function(listId){
    this.lists = this.lists.filter((list) => {
      return list._id !== listId;
    });
  };

  this.getAllLists = function() {
    crud.getAllLists().then((data) => {
      data.forEach((list) => {
        this.lists.push(list);
      });
    });
  };

  this.deleteAllLists = function() {
    crud.deleteAllLists().then(() => {
      this.lists = [];
    });
  };

  this.deleteList = function(listId) {
    crud.deleteList(listId).then((data) => {
      this.deleteLocalList(data._id);
    });
  };

  this.createList = function(listName) {
    crud.createList(listName).then((data) => {
      this.lists.push(data);
    });
  };
}
