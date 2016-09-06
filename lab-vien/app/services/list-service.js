'use strict';

module.exports = function(app) {
  app.service('listService', ['$log', '$q', '$http', listService]);
};


function listService($log, $q, $http) {
  return new ListService($log, $q, $http);
}


function ListService($log, $q, $http) {
  this.$log = $log;
  this.$q = $q;
  this.$http = $http;
  this.lists = [];
  this.baseUrl = `${__API_URL__}/api/list`;
  this.httpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };
}


ListService.prototype = {
  createList: function(listData) {
    this.$log.debug('listService.createList');

    return this.$q((resolve, reject) => {
      this.$http.post(this.baseUrl, listData, this.httpConfig)
        .then(res => {
          this.lists.push(res.data);
          this.$log.debug(`POST ${this.baseUrl} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          this.$log.debug(`POST ${this.baseUrl} failed`);
          reject(err);
        });
    });
  },


  getLists: function() {
    this.$log.debug('listService.getLists');

    return this.$q((resolve, reject) => {
      this.$http.get(this.baseUrl, this.httpConfig)
        .then(res => {
          this.lists = res.data;
          this.$log.debug(`GET ${this.baseUrl} succeeded`);
          resolve(this.lists);
        })
        .catch(err => {
          this.$log.debug(`GET ${this.baseUrl} failed`);
          reject(err);
        });
    });
  },


  // only going to support updating listName, no error checking at the moment though
  updateList: function(listId, listData) {
    this.$log.debug('listService.createList');
    const endpoint = `${this.baseUrl}/${listId}`;

    return this.$q((resolve, reject) => {
      this.$http.put(endpoint, listData, this.httpConfig)
        .then(res => {
          this.$log.debug(`PUT ${endpoint} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          this.$log.debug(`PUT ${endpoint} failed`);
          reject(err);
        });
    });
  },


  deleteList: function(listId) {
    this.$log.debug('listService.getLists');

    return this.$q((resolve, reject) => {
      const endpoint = `${this.baseUrl}/${listId}`;

      this.$http.delete(endpoint, this.httpConfig)
        .then((res) => {
          this.lists.forEach((list, idx) => {
            if (list._id === listId) this.lists.splice(idx, 1);
          });

          this.$log.debug(`DELETE ${endpoint} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          this.$log.debug(`DELETE ${endpoint} failed`);
          reject(err);
        });
    });
  },
};
