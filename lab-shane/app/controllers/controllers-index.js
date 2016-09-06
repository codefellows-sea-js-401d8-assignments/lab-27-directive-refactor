'use strict';

module.exports = function(app){
  require('./list-controller.js')(app);
  require('./form-controller.js')(app);
};
