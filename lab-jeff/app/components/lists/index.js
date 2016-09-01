'use strict';

module.exports = (app) => {
  require('./lists-controller')(app);
  require('./lists-directive')(app);

  require('./list-notes')(app);
};
