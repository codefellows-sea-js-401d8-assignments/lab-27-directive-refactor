'use strict';

module.exports = (app)=>{
  app.controller('ListController', ['$log', '$http', ListController]);
};

function ListController($log, $http){
  this.lists = [];

  this.getAll = function(){
    $log.debug('listCtrl.getAll');
    $http.get(this.baseUrl, this.config)
      .then((res)=>{
        this.lists = res.data;
      }, (err)=>{
        $log.error('Error!', err);
      });
  };
  
  this.createList = function(list){
    console.log(list);
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
        res.data.forEach((list) => {
          this.lists.push(list);
        });
      })
      .catch((err) => {
        $log.log('Error: ', err);
      });
  };

  this.deleteList = function(id){
    $http.delete(this.baseUrl + '/' + id, this.config)
      .then((res)=>{
        let index = this.lists.findIndex((item)=>{
          return item._id === id;
        });
        this.lists.splice(index, 1);
        $log.log('Success!', res.data);
      })
      .catch((err)=>{
        alert('FUCK THIS ISNT WORKING EITHER');
        $log.log('Error', err);
      });
  };
}
