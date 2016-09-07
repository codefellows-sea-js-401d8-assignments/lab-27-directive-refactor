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
    let baseUrl = 'http://localhost:3000/api/list/24';
    let reqData = {name: 'keiran', _id: 24, __v: 0, notes: []};
    let headers = {'Accept': 'application/json'};
    this.$httpBackend.expectDELETE(baseUrl, headers, reqData)
    .respond(200, {name: 'keiran', _id: 24, __v: 0, notes: []});
    this.listCtrl.deleteList(reqData);
    this.$httpBackend.flush();
  });

  it('testing update list', () => {
    let baseUrl ='http://localhost:3000/api/list/25';
    this.listCtrl.lists = [{name:'keiran', _id:25, __v:0, notes: []}];
    let reqData = {name:'beaton', _id:'25', __v:0, notes:[]};
    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.$httpBackend.expectPUT(baseUrl, reqData, headers)
    .respond(200, {name:'beaton', _id:25, __v:0, notes:[]});
    this.listCtrl.updateList(reqData);
    this.$httpBackend.flush();
  });
});
