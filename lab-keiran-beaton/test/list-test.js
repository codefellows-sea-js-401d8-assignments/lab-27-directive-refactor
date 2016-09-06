'use strict';

describe('testing list-controller', function() {
  beforeEach(() => {
    angular.mock.module('crudApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.listCtrl = new $controller('ListController');
      this.$httpBackend = $httpBackend;
      this.listCtrl.baseUrl = 'http://localhost:3000/api/list';
      this.listCtrl.config = {headers: {'Accept':'application/json', 'Content-Type':'application/json'}};
    });
  });

  it('testing create list function', () => {
    let reqData = {name: 'example list'};
    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.$httpBackend.expectPOST(this.listCtrl.baseUrl, reqData, headers)
    .respond(200, {name: 'example list', _id: '1234', __v: 0, notes: []});
    this.listCtrl.createList(reqData);
    this.$httpBackend.flush();
  });

  it('testing get all lists function', () => {
    let baseUrl = 'http://localhost:3000/api/list';
    this.listCtrl.lists = [{name: 'keiran', _id: '24', __v: 0, notes: []}];
    let headers = {'Accept': 'application/json'};
    this.$httpBackend.expectGET(baseUrl, headers)
    .respond(200, [{name: 'keiran', _id: '24', __v: 0, notes: []}]);
    this.listCtrl.getAllLists();
    this.$httpBackend.flush();
  });

  it('testing delete list', () => {
    let baseUrl = 'http://localhost:3000/api/list';
  });
});
