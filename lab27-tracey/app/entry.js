'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let lab27 = angular.module('lab27', []);

lab27.run(['$rootScope', ($rs) =>{
  $rs.noteListUrl = `${__API_URL__}/api/list`;
  $rs.noteHttpConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    }
  };
}]);

require('./component')(lab27);
