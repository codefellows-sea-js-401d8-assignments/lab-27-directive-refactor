'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['$http', '$log', '$scope', NoteController]);

  function NoteController($log, $http, $scope) {
    this.list = $scope.list || {};
    this.notes = $scope.list.notes;
    let baseUrl = `${__API_URL__}/api`;
    let config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    this.createNote = function(note) {
      $log.debug('noteCtrl.create');
      $http.post(baseUrl + '/note', note, config)
        .then((res) => {
          $log.log('success! note created', res.data);
          this.notes.push(res.data);
        }).catch((error) => {
          $log.error('error', error);
        });
    };

  }

};
