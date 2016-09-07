'use strict';

module.exports = (app) => {
  require('./list-notes-controller')(app);
  require('./list-notes-directive')(app);
};
