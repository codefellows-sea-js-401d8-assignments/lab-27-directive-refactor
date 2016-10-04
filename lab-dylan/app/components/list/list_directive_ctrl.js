'use strict';

module.exports = (app) => {
  app.controller('ListController', ['$log', '$http', 'auth', function ($log, $http, auth) {
    this.lists = [];
    this.token = auth.getToken();
    this.listUrl = this.baseUrl + '/api/list';
    this.noteUrl = this.baseUrl + '/api/note';
    this.config.headers['Authorization'] = 'Bearer ' + this.token;
    this.getAllLists = function() {
      $log.debug('listCtrl.getAllLists');
      $http.get(this.listUrl, this.config)
      .then(res => {
        this.lists = res.data;
      }, err => {
        $log.error('error!', err);
      });
    };

    this.deleteList = function(list) {
      $log.debug('listCtrl.deleteList');
      $http.delete(this.listUrl + '/' + list._id, this.config)
      .then(res => {
        this.lists.splice(this.lists.indexOf(list), 1);
      }, err => {
        $log.error('error!', err);
      })
    };

    this.updateList = function(list) {
      $log.debug('listCtrl.updateList');
      $http.put(this.listUrl + '/' + list._id, list, this.config)
      .then(res => {
        list.editing = false;
      }, err => {
        $log.error('error!', err);
      });
    };

    this.createList = function(list) {
      $log.debug('listCtrl.createList');
      $http.post(this.listUrl , list, this.config)
      .then(res => {
        $log.log('success!', res.data);
        this.lists.push(res.data);
      })   
      .catch( err => {
        $log.error('error!', err);
      });
    };


    this.addNote = function(note) {
      $log.debug('listItemCtrl : addNote()');
      let newNote = note;
      // newNote.listId = this.list._id;
      console.log(this.lists);
      $http.post(`${this.noteUrl}`, newNote, this.config)
      .then(res => {
        $log.log('success', res.data);
        let listIndex = this.getListIndex(res.data.listId);
        console.log('res.listId: ' + res.data.listId);
        console.log('listIndex: ' + listIndex);
        this.lists[listIndex].notes.push(res.data);
      }, err => {
        $log.error('error', err);
      });
    };

    this.removeNote = function(note) {
      $log.debug('listItemCtrl : removeNote()');
      $http.delete(`${this.noteUrl}/${note._id}`, this.config)
      .then(res => {
        $log.log('success', res.data);
        this.list.notes.splice(this.notes.indexOf(note), 1);
      }, err => {
        $log.error('error', err);
      }); 
    };

    this.getListIndex = function(listId) {
      return this.lists.indexOf({_id: listId});
    };

  // Useless for this application but I figured why not since the routes already there
  // this.getNotes = () => {
  //   $log.debug('listItemCtrl : getNotes()');
  //   $http.get(`${this.noteUrl}`, this.config)
  //     .then(res => {
  //       $log.log('success', res.data);
  //       this.list.notes = res.data;
  //     }, err => {
  //       $log.error('error', err);
  //     });
  // };

    // this.updateNote = function(note) {
    //   $log.debug('listItemCtrl : updateNote()');
    // // let newNote = note;
    // // newNote.listId = this.listId;
    //   $http.put(`${this.noteUrl}/${note._id}`, note, this.config)
    //   .then(res => {
    //     $log.log('success', res.data);
    //     this.list.notes.splice(this.notes.indexOf(note), 1);
    //   }, err => {
    //     $log.error('error', err);
    //   });
    // };
  }]);
};
