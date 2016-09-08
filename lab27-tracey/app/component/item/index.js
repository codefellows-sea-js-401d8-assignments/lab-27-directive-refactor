'use strict';

module.exports = function(app){
  require('./item_directive_ctrl')(app);
  require('./item_directive')(app);
};
