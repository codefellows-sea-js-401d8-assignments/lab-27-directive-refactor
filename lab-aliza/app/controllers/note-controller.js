'use strict';

module.exports = (app) => {
  app.controller('NoteController', ['$log', '$http', NoteController]);
};

function NoteController($log, $http) {

  let baseUrl = `${__API_URL__}/api/note`;
  let config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  this.notes = [];

  this.getAllNotes = function() {
    $http.get(baseUrl, config)
      .then(res => {
        $log.log('Success: ', res.data);
        this.notes = res.data;
      }, err => {
        $log.error('Error: ', err);
      });
  };

  this.destroyNote = function(note) {
    $log.debug('noteCtrl.destroyNote');
    $http.delete(baseUrl + '/' + note._id, config)
      .then(res => {
        $log.log('Success: ', res.data);
        this.notes.splice(this.notes.indexOf(note), 1);
      }, err => {
        $log.error('Error: ', err);
      });
  };

  this.updateNote = function(note) {
    $http.put(baseUrl + '/' + note._id, note, config)
      .then(res => {
        $log.log('Success: ', res.data);
        note.editing = false;
      }, err => {
        $log.error('Error: ', err);
      });
  };

  this.createNote = function(note){
    $http.post(baseUrl, note, config)
      .then(res => {
        $log.log('Success: ', res.data);
        note.addNote = false;
        this.notes.push(res.data);
        $log.log('this.notes: ', this.notes);
      })
      .catch(err => {
        $log.log('Error: ', err);
      });
  };

}
