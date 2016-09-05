'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let listApp = angular.module('listApp', []);

listApp.run(['$rootScope', ($rs) => {
  $rs.noteListUrl = `${__API_URL__}/api/list`;
  $rs.noteHttpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);

require('./components')(listApp);
require('./controllers')(listApp);
