'use strict';

module.exports = function(app){
  require('./form')(app);
  require('./list')(app);
};
