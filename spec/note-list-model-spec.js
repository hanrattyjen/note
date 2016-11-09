'use strict';

function testNoteListReturnsOneNote() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  if (noteList.returnNotes()[0].returnText() !== "Hello Glasgae") {
    console.log("You arenae displaying 'e note pal");
  }
  else {
    console.log("Passed testNoteListReturnsOneNote: " + noteList.returnNotes()[0].returnText());
  }
}

function testNoteListReturnsManyNotes() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  noteList.addNote("Hello Belfast");
  if (noteList.returnNotes()[1].returnText() !== "Hello Belfast") {
    console.log("You arenae displaying 'e note pal");
  } else {
    console.log("Passed testNoteListReturnsManyNotes: " + noteList.returnNotes()[1].returnText());
  }
}

function testNoteReturnsId() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  // noteList.addNote("Hello Belfast");
  // noteList.addNote("Hello Dublin");
  var note = noteList.returnNotes()[0];
  if (note.returnId() !== 0) {
    console.log("Fail testNoteReturnsId: " + note.returnId());
  } else {
    console.log("Pass testNoteReturnsId: " + note.returnId());
  }
}

function testNoteListReturnsNoNotes() {
  var noteList = new NoteList();
  emptyArray.isItEmpty(noteList);
}

testNoteListReturnsOneNote();
testNoteListReturnsManyNotes();
testNoteListReturnsNoNotes();
testNoteReturnsId();
