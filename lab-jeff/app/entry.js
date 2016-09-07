'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let crudyApp = angular.module('crudyApp', []);

require('./services')(crudyApp);
require('./components')(crudyApp);
