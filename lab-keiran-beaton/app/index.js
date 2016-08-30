'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const crudApp = angular.module('crudApp', []);

require('./controllers')(crudApp);
require('./components')(crudApp);
