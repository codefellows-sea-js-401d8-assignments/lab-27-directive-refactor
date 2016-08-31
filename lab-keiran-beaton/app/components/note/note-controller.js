'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['$log', '$http', '$scope', NoteController]);

  function NoteController($log, $http, $scope) {
    this.list = $scope.list;

    this.getAllListNotes = function() {
      $log.debug('noteCtrl.getAllListNotes');
      let helperArray = [];
      $http.get(this.baseUrl, this.config)
        .then(res => {
          this.notes = res.data;
          this.notes.ForEach(function(note) {
            if (note.listId === this.list._id) {
              helperArray.push(note);
              this.list.notes = helperArray;
            }
          });
        }, err => {
          $log.error('error in noteCtrl.getAllListNotes', err);
        });
    };

    this.deleteNote = function(note) {
      $log.debug('noteCtrl.deleteNote');
      $http.delete(this.baseUrl + '/' + note._id, this.config)
        .then(res => {
          this.notes.splice(this.notes.indexOf(note), 1);
          this.list.notes.splice(this.list.notes.indexOf(note), 1);
          $log.log('noteCtrl.deleteNote res', res);
        }, err => {
          $log.error('error in noteCtrl.deleteNote', err);
        });
    };

    this.updateNote = function(list, note) {
      $log.debug('noteCtrl.updateNote');
      $http.put(this.baseUrl + '/' + note._id, note, this.config)
        .then(res => {
          note.editing = false;
          $log.log('noteCtrl.updateNote res', res);
        }, err => {
          $log.error('error in noteCtrl.updateNote', err);
        });
    };

    this.createNote = function(note) {
      note.listId = this.list._id;
      $log.debug('noteCtrl.createNote');
      $http.post(this.baseUrl, note, this.config)
        .then(res => {
          $log.log('successfully created note', res.data);
          this.notes.push(res.data);
        })
        .catch(err => {
          $log.error('error in noteCtrl.createNote', err);
        });
    };
  }
};
