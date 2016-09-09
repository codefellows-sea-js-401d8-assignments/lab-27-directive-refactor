'use strict';

module.exports = function(app){
  require('./list-form')(app);
  require('./note-form')(app);
  require('./list')(app);
  require('./note')(app);
  require('./sign-in')(app);
  require('./sign-up')(app);
  require('./sign-out')(app);
};
