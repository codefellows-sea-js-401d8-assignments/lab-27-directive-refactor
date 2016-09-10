'use strict';

module.exports = (app) =>{
  require('./list')(app);
  require('./form')(app);
  require('./item')(app);
  require('./sign_in')(app);
  require('./sign_up')(app);
};
