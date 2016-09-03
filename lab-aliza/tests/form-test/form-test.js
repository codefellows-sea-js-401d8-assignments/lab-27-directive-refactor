'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/form')(testApp);

describe('form component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display form', function() {
    let form = this.compile(require('./form-test.html'))(this.scope);
    this.scope.$digest();
    expect(form.find('').text()).toBe('');
  });
});
