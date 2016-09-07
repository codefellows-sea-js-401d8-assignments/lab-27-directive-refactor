'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/list-form')(testApp);

describe('list form component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display list form', function() {
    let listForm = this.compile(require('./list-form-test.html'))(this.scope);
    this.scope.$digest();
    expect(listForm.find('').text()).toBe('');
  });
});
