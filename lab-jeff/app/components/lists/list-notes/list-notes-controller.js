'use strict';

module.exports = (app) => {
  app.controller('ListNotesController', ['$log', ListNotesController]);
};

function ListNotesController($log) {
  $log.log('List Notes Controller...');
}
