'use strict';

module.exports = (app)=>{
  app.controller('ListController', ['$log', '$http', ListController]);
};

function ListController($log, $http){
  this.lists = [];

  this.createList = function(list){
    console.log(list);
    console.log(this.baseUrl);
    console.log(this.config);
    $log.debug('listCtrl.createList');
    $http.post(this.baseUrl, list, this.config)
      .then((res)=>{
        $log.log('success!', res.data);
        this.lists.push(res.data);
        console.log(this.lists);
      })
      .catch((err)=>{
        $log.error('error!', err);
        alert('fuck');
      });
  };

  this.getLists = function() {
    $http.get(this.baseUrl, this.config)
      .then((res) => {
        $log.log('Success!', res.data);
        this.lists = res.data;
      })
      .catch((err) => {
        $log.log('Error: ', err);
      });
  };

  this.deleteList = function(list){
    $http.delete(this.baseUrl + '/' + list._id, this.config)
      .then((res)=>{
        this.lists.splice(this.lists.indexOf(list), 1);
        $log.log('Success!', res.data);
      })
      .catch((err)=>{
        alert('FUCK THIS ISNT WORKING EITHER');
        $log.log('Error', err);
      });
  };
}
