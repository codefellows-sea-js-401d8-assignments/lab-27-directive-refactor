'use strict';

module.exports = (app) => {
  require('./list-controller')(app);
  require('./list-directive')(app);
};
