'use strict';

module.exports = (app) => {
  app.factory('AppData', ['$log', AppData]);
};

function AppData($log) {
  $log.log('App Data service');
}
