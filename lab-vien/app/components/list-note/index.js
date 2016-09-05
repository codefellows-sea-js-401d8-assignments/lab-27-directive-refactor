'use strict';

module.exports = function(app) {
  require('./note-note-controller')(app);
  require('./note-note-directive')(app);
};
