'use strict';

module.exports = (app) => {
  app.controller('AllListsController', ['$log', '$http', AllListsController]);
};

function AllListsController($log, $http) {
  let lc = this;

  lc.lists = [];

  let baseUrl = `${__API_URL__}/api/list/`;
  let config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  lc.deleteLocalList = function(listId){
    lc.lists = lc.lists.filter((list) => {
      return list._id !== listId;
    });
  };

  lc.getAllLists = function() {
    $http.get(baseUrl, config)
      .then((res) => {
        $log.log('Success!', res.data);
        res.data.forEach((list) => {
          lc.lists.push(list);
        });
      })
      .catch((err) => {
        return err;
      });
  };

  lc.deleteAllLists = function() {
    $http.delete(baseUrl, config)
      .then((res) => {
        $log.log('Success!', res.data);
        lc.lists = [];
      })
      .catch((err) => {
        return err;
      });
  };

  lc.createList = function(listName) {
    $http.post(baseUrl, listName, config)
      .then((res) => {
        $log.log('Success!', res.data);
        lc.lists.push(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  lc.deleteList = function(listId) {
    $http.delete(baseUrl + listId, config)
      .then((res) => {
        $log.log('Success', res.data);
        lc.deleteLocalList(listId);
      })
      .catch((err) => {
        return err;
      });
  };
}
