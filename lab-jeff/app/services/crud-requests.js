'use strict';

module.exports = (app) => {
  app.factory(('crud'), ['$log', '$http', '$q', crud]);
};

function crud($log, $http, $q) {
  $log.log('Accessing CRUD functions');
  let crud = {};

  let listUrl = 'http://localhost:3000/api/list/';
  let noteUrl = 'http://localhost:3000/api/note';
  let config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  crud.getAllLists = function() {
    return $q(function(resolve, reject) {
      $http.get(listUrl, config)
      .then((res) => {
        $log.log('Get all lists request: ', res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };

  crud.deleteAllLists = function() {
    return $q(function(reslove, reject) {
      $http.delete(listUrl, config)
      .then((res) => {
        $log.log('Success!', res.data);
        reslove(res.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };

  crud.createList = function(listName) {
    return $q(function(resolve, reject) {
      $http.post(listUrl, listName, config)
      .then((res) => {
        $log.log('Success!', res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };

  crud.deleteList = function(listId) {
    return $q(function(resolve, reject){
      $http.delete(listUrl + listId, config)
      .then((res) => {
        $log.log('Success', res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };

  crud.createNote = function(noteContent) {
    return $q(function(resolve, reject) {
      $http.post(noteUrl, noteContent, config)
      .then((res) => {
        $log.log('Success!', res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };

  return crud;
}
