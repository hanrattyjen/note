'use strict';

function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("Note 1");
  noteList.addNote("Note 2");
  var noteView = new NoteView(noteList);

  if (noteView.getNoteListHTML(noteList.getNotes()) !== "<ul><li><a href=\"#notes/0\"><div>Note 1</div></a></li><li><a href=\"#notes/1\"><div>Note 2</div></a></li></ul>") {
    console.log("Error: testNoteListView" + noteView.getNoteListHTML(noteList.getNotes()));
  } else {
    console.log("Passed: testNoteListView");
  }
}

function testNoteLessThanTwentyCharacters() {
  var noteList = new NoteList();
  noteList.addNote("This note is alot longer than all the other notes, it should be cut down to roughly 20 characters");
  var noteView = new NoteView();

  var truncatedNotes = noteView.getNoteTitleList(noteList.getNotes());
  var noteText = truncatedNotes.getNotes()[0].getText();

  if ( noteText !== "This note is alot l") {
    console.log("Fail testNoteLessThanTwentyCharacters");
  } else {
    console.log("Pass testNoteLessThanTwentyCharacters");
  }
}

testNoteListView();
testNoteLessThanTwentyCharacters();
