'use strict';

describe('testing note-controller', function() {
  beforeEach(() => {
    angular.mock.module('crudApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.noteCtrl = new $controller('NoteController');
      this.$httpBackend = $httpBackend;
      // this.noteCtrl.baUrl = 'http://localhost:3000/api/note';
      // this.noteCtrl.config = {headers: {'Accept':'application/json', 'Content-Type':'application/json'}};
    });
  });

  it('testing create note function', () => {
    let reqData = {name: 'example note'};
    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.$httpBackend.expectPOST(this.noteCtrl.noteUrl, reqData, headers)
    .respond(200, {name: 'example note', _id: '1234', __v: 0});
    this.noteCtrl.createNote(reqData);
    this.$httpBackend.flush();
  });

  it('testing get all notes function', () => {
    let baseUrl = 'http://localhost:3000/api/note';
    this.noteCtrl.notes = [{name: 'keiran', _id: '24', __v: 0}];
    let headers = {'Accept': 'application/json'};
    this.$httpBackend.expectGET(baseUrl, headers)
    .respond(200, [{name: 'keiran', _id: '24', __v: 0}]);
    this.noteCtrl.getAllNotes();
    this.$httpBackend.flush();
  });

  it('testing delete note', () => {
    let baseUrl = 'http://localhost:3000/api/note/24';
    let reqData = {name: 'keiran', _id: 24, __v: 0};
    let headers = {'Accept': 'application/json'};
    this.$httpBackend.expectDELETE(baseUrl, headers, reqData)
    .respond(200, {name: 'keiran', _id: 24, __v: 0});
    this.noteCtrl.deleteNote(reqData);
    this.$httpBackend.flush();
  });

  it('testing update note', () => {
    let baseUrl ='http://localhost:3000/api/note/25';
    this.noteCtrl.notes = [{name:'keiran', _id:25, __v:0}];
    let reqData = {name:'beaton', _id:25, __v:0};
    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.$httpBackend.expectPUT(baseUrl, reqData, headers)
    .respond(200, {name:'beaton', _id:25, __v:0});
    this.noteCtrl.updateNote(reqData);
    this.$httpBackend.flush();
  });
});
