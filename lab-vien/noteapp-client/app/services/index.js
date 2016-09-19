'use strict';

module.exports = function(app) {
  require('./list-service')(app);
  require('./note-service')(app);
};
