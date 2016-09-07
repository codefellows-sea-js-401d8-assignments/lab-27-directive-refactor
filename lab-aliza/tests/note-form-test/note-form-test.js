'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/note-form')(testApp);

describe('list component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display note form', function() {
    let noteForm = this.compile(require('./note-form-test.html'))(this.scope);
    this.scope.$digest();
    expect(noteForm.find('').text()).toBe('');
  });
});
