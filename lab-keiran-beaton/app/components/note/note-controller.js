'use strict';

module.exports = (app) => {
  app.controller('NoteController', ['$log', '$http', '$scope', NoteController]);

  function NoteController($log, $http, $scope) {
    this.notes = [];

    this.getAllNotes = function() {
      $log.debug('noteCtrl.getAllNotes');
      $http.get(this.noteUrl, this.config)
        .then((res) => {
          $log.log('noteCtrl.getAllNotes res', res);
          this.notes = res.data;
          $log.log('this.notes', this.notes);
        }, err => {
          $log.error('error in noteCtrl.getAllNotes', err);
        });
    };

    this.matchNotes = function() {
      $log.debug('noteCtrl.matchNotes');
      this.notes.forEach(function(note) {
        if(note.listId === $scope.list._id) {
          $scope.list.notes.push(note);
        }
      });
    };

    this.deleteNote = function(note) {
      $log.debug('noteCtrl.deleteNote');
      $http.delete(this.noteUrl + '/' + note._id, this.config)
        .then((res) => {
          this.notes.splice(this.notes.indexOf(note), 1);
          $log.log('noteCtrl.deleteNote res', res);
        }, err => {
          $log.error('error in noteCtrl.deleteNote', err);
        });
    };

    this.updateNote = function(note) {
      $log.debug('noteCtrl.updateNote');
      $http.put(this.noteUrl + '/' + note._id, note, this.config)
        .then(res => {
          note.editing = false;
          $log.log('noteCtrl.updateNote res', res);
        }, err => {
          $log.error('error in noteCtrl.updateNote', err);
        });
    };

    this.createNote = function(note) {
      note.listId = $scope.list._id;
      $log.debug('noteCtrl.createNote');
      $http.post(this.noteUrl, note, this.config)
        .then(res => {
          $log.log('successfully created note', res.data);
          $log.log('noteCtrl.notes before', this.notes);
          this.notes.push(res.data);
          $log.log('noteCtrl.notes after', this.notes);
        })
        .catch(err => {
          $log.error('error in noteCtrl.createNote', err);
        });
    };
  }
};
