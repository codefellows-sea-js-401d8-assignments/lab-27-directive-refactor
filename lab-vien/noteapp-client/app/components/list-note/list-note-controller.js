'use strict';

module.exports = function(app) {
  app.controller('ListNoteController', ListNoteController);
};

function ListNoteController() {
  this.editing = false;
}

ListNoteController.prototype = {
  toggleEdit: function() {
    this.editing = (this.editing) ? false : true;
  },
};
