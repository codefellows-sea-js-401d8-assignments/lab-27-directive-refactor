'use strict';

module.exports = function(app){
  require('./form/form-directive.js')(app);
  require('./list/list-directive.js')(app);
  require('./note/note-directive.js')(app);
  require('./signin/signin-directive.js')(app);
  require('./signup/signup-directive.js')(app);
};
