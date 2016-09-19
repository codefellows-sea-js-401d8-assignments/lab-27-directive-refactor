'use strict';

module.exports = function(app) {
  require('./note-app-controller')(app);
  require('./note-app-directive')(app);
};
