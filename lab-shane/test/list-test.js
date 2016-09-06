'use strict';

const angular = require('angular');
const testApp = angular.module('testApp', []);

require('../app/controllers/controllers-index.js')(testApp);
require('../app/components/components-index.js')(testApp);

describe('Testing Lists', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile){
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should do stuff', function(){
    let list = this.compile('<sh-list></sh-list>')(this.scope);
    this.scope.$digest();
    let lc = list.isolateScope().lc;
    lc.getAllLists();
    list.find('h4').text().toBe('');
  });



});
