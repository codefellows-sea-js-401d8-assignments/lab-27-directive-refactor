'use strict';

module.exports = (app) => {
  require('./list')(app);
  require('./list-form')(app);
  require('./note')(app);
  require('./note-form')(app);
};
