'use strict';

module.exports = (app) => {
  require('./note-form-controller')(app);
  require('./note-form-directive')(app);
};
