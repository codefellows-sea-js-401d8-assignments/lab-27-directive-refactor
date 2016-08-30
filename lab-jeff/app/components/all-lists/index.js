'use strict';

module.exports = (app) => {
  require('./all-lists-controller.js')(app);
  require('./all-lists-directive.js')(app);
};
