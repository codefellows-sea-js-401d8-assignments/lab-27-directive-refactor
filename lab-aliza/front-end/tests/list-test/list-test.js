'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/list')(testApp);

describe('list component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display lists', function() {
    let lists = this.compile(require('./list-test.html'))(this.scope);
    this.scope.$digest();
    expect(lists.find('').text()).toBe('');
  });
});
