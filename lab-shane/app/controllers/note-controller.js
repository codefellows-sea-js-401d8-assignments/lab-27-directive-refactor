'use strict';

module.exports = function(app) {
  app.controller('NoteController', ['$http', '$log', '$scope', NoteController]);

  function NoteController($log, $http, $scope) {
    this.list = $scope.list || {};
    this.note = $scope.note || {};
    this.notes = this.list.notes;
    this.getAllLists = $scope.getAllLists;

    let baseUrl = `${__API_URL__}/api`;
    let config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    this.createNote = function(note) {
      console.log('creating note');
      $log.debug('noteCtrl.create');
      note.listId = this.list._id;
      $http.post(baseUrl + '/note', note, config)
        .then((res) => {
          $log.log('success! note created', res.data);

          this.notes.push(res.data);
        }).catch((error) => {
          $log.error('error', error);
        });
      this.getAllLists();
    };

    this.updateNote = function(note){
      $log.debug('noteCtrl.update');
      $http.put(baseUrl + '/note' + '/' + note._id, note, config)
      .then((res)=>{
        this.list.notes.edit = false;
        $log.log('success! note updated', res.data);
      });
    };

    this.deleteNote = function(note){
      $log.debug('noteCtrl.delete');
      $http.delete(baseUrl + '/note/' + note._id, note, config)
      .then((res)=>{
        $log.log('success! note deleted', res.data);
        this.notes.splice(this.notes.indexOf(note), 1);
      }).catch((error) =>{
        $log.error('error', error);
      });
      this.getAllLists();
    };

  }

};
