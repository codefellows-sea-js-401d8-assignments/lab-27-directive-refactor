'use strict';

module.exports = function(app) {
  app.service('noteService', ['$log', '$q', '$http', noteService]);
};

function noteService($log, $q, $http) {
  const baseUrl = `${__API_URL__}/api/note`,
    httpConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    service = {};


  service.createNote = function(noteData) {
    $log.debug('noteService.createList');

    return $q((resolve, reject) => {
      $http.post(baseUrl, noteData, httpConfig)
        .then(res => {
          $log.debug(`POST ${baseUrl} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          $log.debug(`POST ${baseUrl} failed`);
          reject(err);
        });
    });
  };

  // unused
  service.getNotes = function() {
    $log.debug('noteService.createList');

    return $q((resolve, reject) => {
      $http.get(baseUrl, httpConfig)
        .then(res => {
          $log.debug(`GET ${baseUrl} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          $log.debug(`GET ${baseUrl} failed`);
          reject(err);
        });
    });
  };


  service.updateNote = function(noteId, noteData) {
    $log.debug('noteService.createList');
    const endpoint = `${baseUrl}/${noteId}`;

    return $q((resolve, reject) => {
      $http.put(endpoint, noteData, httpConfig)
        .then(res => {
          $log.debug(`PUT ${endpoint} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          $log.debug(`PUT ${endpoint} failed`);
          reject(err);
        });
    });
  };


  service.deleteNote = function(noteId) {
    $log.debug('noteService.createList');
    const endpoint = `${baseUrl}/${noteId}`;

    return $q((resolve, reject) => {
      $http.delete(endpoint, httpConfig)
        .then(res => {
          $log.debug(`DELETE ${endpoint} succeeded`);
          resolve(res.data);
        })
        .catch(err => {
          $log.debug(`DELETE ${endpoint} failed`);
          reject(err);
        });
    });
  };


  return service;
}
