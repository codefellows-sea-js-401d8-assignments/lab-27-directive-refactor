'use strict';

module.exports = (app) => {
  app.controller('ListNotesController', ['$log', '$http', 'data', 'crud', ListNotesController]);
};

function ListNotesController($log, $http, data, crud) {
  this.lists = data.lists;

  let noteContent = {
    name: 'test note',
    content: 'test note content',
    listId: this.lists[1]._id,
  };


  this.createNote = function() {
    crud.createNote(noteContent).then(() => {
      $log.log('Succesfully created note');
    });
  };
}
