'use strict';

module.exports = function(app) {
  require('./list-note-controller')(app);
  require('./list-note-directive')(app);
};
