'use strict';

module.exports = function(app) {
  require('./list-form-controller')(app);
  require('./list-form-directive')(app);
};
