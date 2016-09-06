'use strict';

module.exports = function(app) {
  app.controller('ListItemController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    this.list = $scope.list || {};
    this.baseUrl = 'http://localhost:3000/api/note';
    this.listId = this.list._id;
    this.notes = $scope.list.notes;

      // Note CRUD functions
    this.addNote = function(note) {
      $log.debug('listItemCtrl : addNote()');
      let newNote = note;
      newNote.listId = this.listId;
      $http.post(`${this.baseUrl}`, newNote, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.list.notes.push(res.data);
      }, err => {
        $log.error('error', err);
      });
    };

    this.removeNote = (note) => {
      $log.debug('listItemCtrl : removeNote()');
      $http.delete(`${this.baseUrl}/${note._id}`)
      .then(res => {
        $log.log('success', res.data);
        this.list.notes.splice(this.notes.indexOf(note), 1);
      }, err => {
        $log.error('error', err);
      }); 
    };

  // Useless for this application but I figured why not since the routes already there
    this.getNotes = () => {
      $log.debug('listItemCtrl : getNotes()');
      $http.get(`${this.baseUrl}`)
      .then(res => {
        $log.log('success', res.data);
        this.notes = res.data;
      }, err => {
        $log.error('error', err);
      });
    };

    this.updateNote = (note) => {
      $log.debug('listItemCtrl : updateNote()');
      let newNote = note;
      newNote.listId = this.listId;
      $http.put(`${this.baseUrl}/${note._id}`, newNote, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.list.notes.splice(this.notes.indexOf(note), 1);
      }, err => {
        $log.error('error', err);
      });
    };
  }]);
};