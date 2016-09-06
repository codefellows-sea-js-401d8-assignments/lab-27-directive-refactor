'use strict';

module.exports = (app) => {
  require('./list-form-controller')(app);
  require('./list-form-directive')(app);
};
