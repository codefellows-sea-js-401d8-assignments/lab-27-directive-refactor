'use strict';

module.exports = (app) => {
  app.factory('data', ['$log', data]);
};

function data($log) {
  let data = {};
  data.lists = [];
  $log.log('Data from factory ', data.lists);

  return data;
}
