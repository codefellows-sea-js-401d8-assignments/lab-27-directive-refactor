'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/note')(testApp);

describe('note component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should display notes', function() {
    let notes = this.compile(require('./note-test.html'))(this.scope);
    this.scope.$digest();
    expect(notes.find('').text()).toBe('');
  });
});
