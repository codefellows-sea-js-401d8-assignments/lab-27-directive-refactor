'use strict';

module.exports = function(app) {
  app.service('noteService', ['$log', '$q', '$http', noteService]);
};

function noteService($log, $q, $http) {
  return new NoteService($log, $q, $http);
}

function NoteService($log, $q, $http) {
  this.$log = $log;
  this.$q = $q;
  this.$http = $http;
  this.baseUrl = `${__API_URL__}/api/note`;
  this.httpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };
}

NoteService.prototype = {
  createNote: function(noteData) {
    this.$log.debug('noteService.createList');

    return this.$q((resolve, reject) => {
      this.$http.post(this.baseUrl, noteData, this.httpConfig)
        .then(res => {
          this.$log.debug(`POST ${this.baseUrl} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          this.$log.debug(`POST ${this.baseUrl} failed`);
          reject(err);
        });
    });
  },


  getNotes: function() {
    this.$log.debug('noteService.createList');

    return this.$q((resolve, reject) => {
      this.$http.get(this.baseUrl, this.httpConfig)
        .then(res => {
          this.$log.debug(`GET ${this.baseUrl} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          this.$log.debug(`GET ${this.baseUrl} failed`);
          reject(err);
        });
    });
  },


  updateNote: function(noteId, noteData) {
    this.$log.debug('noteService.createList');
    const endpoint = `${this.baseUrl}/${noteId}`;

    return this.$q((resolve, reject) => {
      this.$http.put(endpoint, noteData, this.httpConfig)
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


  deleteNote: function(noteId) {
    this.$log.debug('noteService.createList');
    const endpoint = `${this.baseUrl}/${noteId}`;

    return this.$q((resolve, reject) => {
      this.$http.delete(endpoint, this.httpConfig)
        .then(res => {
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
