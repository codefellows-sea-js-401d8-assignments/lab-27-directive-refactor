'use strict';

module.exports = function(app) {
  require('./list')(app);
  require('./list-form')(app);
  require('./note')(app);
  require('./note-form')(app);
};
