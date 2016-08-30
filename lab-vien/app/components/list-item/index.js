'use strict';

module.exports = function(app) {
  require('./list-item-controller')(app);
  require('./list-item-directive')(app);
};
