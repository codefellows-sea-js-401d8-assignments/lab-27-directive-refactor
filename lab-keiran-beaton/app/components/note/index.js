'use strict';

module.exports = (app) => {
  require('./note-controller')(app);
  require('./note-directive')(app);
};
