'use strict';

module.exports = function(app) {
  require('./list_form')(app);
  require('./list')(app);
};