'use strict';

function testNoteListReturnsOneNote() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  if (noteList.getNotes()[0].getText() !== "Hello Glasgae") {
    console.log("You arenae displaying 'e note pal");
  }
  else {
    console.log("Passed testNoteListReturnsOneNote: " + noteList.getNotes()[0].getText());
  }
}

function testNoteListReturnsManyNotes() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  noteList.addNote("Hello Belfast");
  if (noteList.getNotes()[1].getText() !== "Hello Belfast") {
    console.log("You arenae displaying 'e note pal");
  } else {
    console.log("Passed testNoteListReturnsManyNotes: " + noteList.getNotes()[1].getText());
  }
}

function testNoteReturnsId() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  // noteList.addNote("Hello Belfast");
  // noteList.addNote("Hello Dublin");
  var note = noteList.getNotes()[0];
  if (note.getId() !== 0) {
    console.log("Fail testNoteReturnsId: " + note.getId());
  } else {
    console.log("Pass testNoteReturnsId: " + note.getId());
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
