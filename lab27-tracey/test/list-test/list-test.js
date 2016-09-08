'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/component/list')(testApp);

describe('testing list compnents', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope, $routeParams){
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display some lists', function(){
    let list = this.compile(require('./list-test.html'))(this.scope);
    this.scope.$digest();
    expect(list.find('').text().toBe('');
  });
});
