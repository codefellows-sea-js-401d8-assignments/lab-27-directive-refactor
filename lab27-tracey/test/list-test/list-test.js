'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);

require('../../app/component/list')(testApp);

describe('testing list compnents', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope){
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.scope.baseUrl = 'http://localhost:3000/api/list';
    this.scope.headers = {
      'Content-Type': 'application/json',
      'Accept-Content': 'application/json'
    };
  }));

  it('should display some lists', function(){
    let list = this.compile('<div list-directive config="headers" base-url="{{baseUrl}}"></div>')(this.scope);
    this.scope.$digest();
    expect(list.find('').text()).toBe('');
  });
});
