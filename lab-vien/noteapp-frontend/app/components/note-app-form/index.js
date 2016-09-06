'use strict';

module.exports = function(app) {
  require('./note-app-form-controller')(app);
  require('./note-app-form-directive')(app);
};
