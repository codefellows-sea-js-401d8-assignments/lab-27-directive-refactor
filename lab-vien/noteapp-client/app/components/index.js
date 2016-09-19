'use strict';

module.exports = function(app) {
  require('./signup')(app);
  require('./signin')(app);
  require('./list-note')(app);
  require('./list')(app);
  require('./note-app')(app);
};
