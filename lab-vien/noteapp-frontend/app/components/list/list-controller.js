'use strict';

module.exports = function(app) {
  app.controller('ListController', ['$log', 'listService', 'noteService', ListController]);
};

function ListController($log, listService, noteService) {
  this.$log = $log;
  this.listService = listService;
  this.noteService = noteService;
}

ListController.prototype = {
  updateList: function(listData) {
    this.listService.updateList(this.list._id, listData)
      // .then(this.list.name = listData.name)
      .then(list => console.log(`updated to ${list.name}`))
      .catch(err => console.log(err));
  },

  deleteList: function() {
    this.listService.deleteList(this.list._id)
      .then(list => console.log(`deleted ${list.name}`))
      .catch(err => console.log(err));
  },

  createNote: function(noteData) {
    noteData.listId = this.list._id;
    this.noteService.createNote(noteData)
      .then(note => this.list.notes.push(note))
      .catch(err => console.log(err));
  },

  updateNote: function(noteId, noteData) {
    this.noteService.updateNote(noteId, noteData)
      .then(note => {
        this.list.notes.forEach((item, idx) => {
          if (item._id === noteId) {
            this.list.notes[idx] = note;
          }
        });
      });
  },

  deleteNote: function(noteId) {
    this.noteService.deleteNote(noteId)
      .then(note => {
        this.list.notes.forEach((note, idx) => {
          if (note._id === noteId) {
            this.list.notes.splice(idx, 1);
          }
        });
        this.$log.debug(`NOTE ${note.name} deleted`);
      })
      .catch(err => console.log(err));
  },
};
