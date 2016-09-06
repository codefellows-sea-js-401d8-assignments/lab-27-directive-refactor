'use strict';

module.exports = function(app) {
  require('./list')(app);
  require('./form')(app);
  require('./list-note')(app);
};
