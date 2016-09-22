'use strict';

module.exports = function(app){
  require('./list-form')(app);
  require('./note-form')(app);
  require('./list')(app);
  require('./note')(app);
};
