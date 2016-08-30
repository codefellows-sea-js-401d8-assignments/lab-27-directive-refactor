'use strict';

module.exports = function(app) {
  require('./list')(app);
  require('./list-item')(app);
  require('./list-form')(app);
};
