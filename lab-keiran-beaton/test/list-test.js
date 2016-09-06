'use strict';

describe('testing list-controller', function() {
  beforeEach(() => {
    angular.mock.module('crudApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.listCtrl = new $controller('ListController');
      this.$httpBackend = $httpBackend;
    });
  });

  it('testing create list function', () => {
    let baseUrl = 'http://localhost:3000/api/list';
    let reqData = {name: 'example list'};
    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.$httpBackend.expectPOST(baseUrl, reqData, headers)
    .respond(200, {name: 'example list', _id: '1234', __v: 0, notes: []});
    this.listCtrl.createList(reqData);
    this.$httpBackend.flush();
  });

  it('testing get all lists function', () => {
    let baseUrl = 'http://localhost:3000/api/list';
  });
});
