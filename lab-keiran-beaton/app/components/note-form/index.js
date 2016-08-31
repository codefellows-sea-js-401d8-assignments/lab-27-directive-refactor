'use strict';

module.exports = function(app) {
  require('./note-form-controller')(app);
  require('./note-form-directive')(app);
};
