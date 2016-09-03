'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/list-items')(testApp);

describe('list items component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display list items', function() {
    let listItems = this.compile(require('./list-items-test.html'))(this.scope);
    this.scope.$digest();
    expect(listItems.find('').text()).toBe('');
  });
});
