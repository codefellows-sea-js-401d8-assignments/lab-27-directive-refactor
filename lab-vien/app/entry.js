'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./style/scss/main.scss');

const angular = require('angular');
const noteApp = angular.module('noteApp', []);

noteApp.run(['$rootScope', ($noteApp) => {
  $noteApp.noteUrl = `${__API_URL__}/api/list`;
  $noteApp.noteHttpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json',
    },
  };
}]);

require('./components')(noteApp);
