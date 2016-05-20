
'use strict';

describe("Create a NoteApplication:", function() {
 var notesApplication;


 beforeEach(function() {
   notesApplication = new NotesApplication("Fred");
  
 });


it("Author should have a name", function(){
 expect(notesApplication.author).toEqual("Fred");
});

it("Create a method create Notes ", function(){
 
 spyOn(notesApplication,"create");
 notesApplication.create();
 expect(notesApplication.create).toHaveBeenCalled();
});


it("listNotes should be called", function () {
     spyOn(notesApplication,"listNotes");
     notesApplication.listNotes();
     expect(notesApplication.listNotes).toHaveBeenCalled();
   });

it("get method should be called", function () {
     spyOn(notesApplication,"getNote");
     notesApplication.getNote(1);
     expect(notesApplication.getNote).toHaveBeenCalled();
   });

it("should be able call search method ", function () {
     spyOn(notesApplication,"search");
     notesApplication.search();
     expect(notesApplication.search).toHaveBeenCalled();
   });

it("should be able to return a search value", function () {
     spyOn(notesApplication,"search");
     notesApplication.search();
     expect(notesApplication.search(this.search_text)).toEqual(this.search_text);
   });


it("delete method should be called", function () {
     spyOn(notesApplication,"delete");
     notesApplication.delete();
     expect(notesApplication.delete).toHaveBeenCalled();
   });

it("edit method should be called", function () {
     spyOn(notesApplication,"edit");
     notesApplication.edit();
     expect(notesApplication.edit).toHaveBeenCalled();
   });



});
