'use strict';

function emptyListOfNotesUponInstantiation(){
  var list = new List();
  emptyArray.isItEmpty(list.notes);
}

function addsNotesToArray(){
  var list = new List();
  var note = new Note('Javascript is lovely')
  list.addNote(note)
  !emptyArray.isItEmpty(list.notes);
}

function showsAllNotesInTheList() {
  var list = new List();
  var note = new Note("First Note");
  var note2 = new Note("Another one");
  list.addNote(note);
  list.addNote(note2);
  assert.isTrue(list.showAllNotes() === note && note2);
};

showsAllNotesInTheList();
addsNotesToArray();
emptyListOfNotesUponInstantiation();
