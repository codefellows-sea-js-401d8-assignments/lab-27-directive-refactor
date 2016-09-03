'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
var app = angular.module('listApp', []);

require('./components')(app);
require('./controllers')(app);
