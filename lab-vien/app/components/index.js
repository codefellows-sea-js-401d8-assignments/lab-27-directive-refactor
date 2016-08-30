'use strict';

module.exports = function(app) {
  require('./list-form')(app);
  require('./list')(app);
};
