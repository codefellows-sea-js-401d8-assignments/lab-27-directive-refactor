'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./style/scss/main.scss');

const angular = require('angular');
const noteApp = angular.module('noteApp', []);

require('./services')(noteApp);
require('./controllers')(noteApp);
require('./components')(noteApp);
