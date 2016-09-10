'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);

require('../../app/component/list')(testApp);

describe('testing list compnents', ()=> {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(($controller, $httpBackend)=>{
    this.listCtrl = new $controller('ListController');
    this.$httpBackend = $httpBackend;
  }));

  it('testing createList', () => {
    let url = 'http://localhost:3000/api/list';
    let requestData = {name: 'example name'};
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    console.log(this.$httpBackend);
    this.$httpBackend.expectPOST(url, requestData, headers)
    .respond(200, {
      name: 'example name',
      _id: '1234',
      __v: 0,
      notes: []
    });

    this.listCtrl.createList(requestData);
    this.$httpBackend.flush();
  });
});
