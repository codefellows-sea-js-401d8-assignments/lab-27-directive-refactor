'use strict';

'use strict';

module.exports = (app)=>{
  app.controller('ItemDirectiveController', ['$log', '$http', ItemDirectiveController]);
};

function ItemDirectiveController($log, $http){
  this.notes = [];

  this.createNote = function(note){
    console.log(note);
    console.log(this.baseUrl);
    console.log(this.config);
    $log.debug('itemCtrl.createNote');
    $http.post(this.baseUrl, note, this.config)
      .then((res)=>{
        $log.log('success!', res.data);
        this.notes.push(res.data);
        console.log(this.notes);
      })
      .catch((err)=>{
        $log.error('error!', err);
        alert('fuck');
      });
  };

  this.getNotes = function() {
    $http.get(this.baseUrl, this.config)
      .then((res) => {
        $log.log('Success!', res.data);
        this.notes = res.data;
      })
      .catch((err) => {
        $log.log('Error: ', err);
      });
  };

  this.deleteNote = function(note){
    $http.delete(this.baseUrl + '/' + note._id, this.config)
      .then((res)=>{
        this.notes.splice(this.notes.indexOf(note), 1);
        $log.log('Success!', res.data);
      })
      .catch((err)=>{
        alert('FUCK THIS ISNT WORKING EITHER');
        $log.log('Error', err);
      });
  };
}
