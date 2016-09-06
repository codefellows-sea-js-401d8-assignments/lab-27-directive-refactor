'use strict';

module.exports = function(app){
  require('./form/form-directive.js')(app);
  require('./list/list-directive.js')(app);
};
