'use strict';

module.exports = function(app) {
  // require('./list-form')(app);
  require('./list-note')(app);
  require('./list')(app);
  require('./note-app')(app);
};
