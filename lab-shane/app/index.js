'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const listApp = require('angular').module('listApp', []);

require('./controllers/controllers-index.js')(listApp);
require('./components/components-index.js')(listApp);
