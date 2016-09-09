'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let listApp = angular.module('listApp', []);

listApp.run(['$rootScope', ($rs) => {
  $rs.baseUrl = `${__API_URL__}`;
  $rs.listUrl = `${__API_URL__}/api/list`;
  $rs.noteUrl = `${__API_URL__}/api/note`;
  $rs.noteHttpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);


require('./components')(listApp);
