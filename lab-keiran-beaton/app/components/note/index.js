'use strict';

module.exports = function(app) {
  require('./note-controller')(app);
  require('./note-directive')(app);
};
