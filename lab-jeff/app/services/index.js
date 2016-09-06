'use strict';

module.exports = (app) => {
  require('./app-data')(app);
  require('./crud-requests')(app);
};
