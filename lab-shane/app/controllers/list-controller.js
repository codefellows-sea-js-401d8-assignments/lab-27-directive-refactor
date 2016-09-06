'use strict';

module.exports = function(app) {
  app.controller('ListController', ['$log', '$http', ListController]);

  function ListController($log, $http) {
    this.lists = [];
    this.notes = [{
      name: 'fake',
      content: 'check out this super legit note!'
    }];

    let baseUrl = `${__API_URL__}/api`;
    let config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    this.createList = function(list) {
      $log.debug('listCtrl.create');
      $http.post(baseUrl + '/list', list, config)
        .then((res) => {
          $log.log('success! list created', res.data);
          this.lists.push(res.data);
        }).catch((error) => {
          $log.error('error', error);
        });
    };

    this.updateList = function(list){
      $log.debug('listCtrl.update');
      $http.put(baseUrl + '/list' + '/' + list._id, list, config)
      .then((res)=>{
        list.edit = false;
        $log.log('success! list updated', res.data);
        // this.lists.splice(this.lists.indexOf(list), 1);
        // this.lists.push(res.data);
      });
    };

    this.deleteList = function(list) {
      $log.debug('listCtrl.delete');
      $http.delete(baseUrl + '/list' + '/' + list._id, config)
        .then((res) => {
          $log.log('success! list deleted', res.data);
          this.lists.splice(this.lists.indexOf(list), 1);
        }).catch((error) => {
          $log.error('error', error);
        });
    };

    this.getAllLists = function() {
      $log.debug('listCtrl.getAll');
      $http.get(baseUrl + '/list', config)
        .then((res) => {
          $log.log('success! all lists retrieved', res.data);
          this.lists = res.data;
        }).catch((error) => {
          $log.error('error', error);
        });
    };

    this.createNote = function(note){
      $log.debut('listCtrl.createNote');
      $http.get(baseUrl + '/note', note, config)
      .then((res)=>{
        $log.log('success! note created', res.data);
        this.lists.indexOf(res.data.listId).notes = res.data;
      })
      .catch((error)=>{
        $log.error('error', error);
      });
    };



  }
};
