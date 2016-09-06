'use strict';

module.exports = (app) =>{
  require('./list')(app);
  require('./form')(app);
  require('./item')(app);
};
