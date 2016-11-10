'use strict';

function testNoteControllerIsInstantiated() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  var noteView = new NoteView(noteList);
  var noteController = new NoteController(noteView);
  noteController.showList();
  if(noteController.htmlBody !== "<ul><li><a href=\"#notes/0\"><div>Hello Glasgae</div></a></li></ul>") {
    console.log("Error testNoteControllerIsInstantiated: " + noteController.htmlBody);
  } else {
    console.log("Passed testNoteControllerIsInstantiated: " + noteController.htmlBody);
  }

  if(document.getElementById('note').innerHTML !== "<ul><li><a href=\"#notes/0\"><div>Hello Glasgae</div></a></li></ul>") {
    console.log("Error: innerHTMl is not set");
  } else {
    console.log("Passed: innerHTML has been set, YOU BEAUTY");
  }
}

function testCanGetNoteId() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  var noteView = new NoteView(noteList);
  var noteController = new NoteController(noteView);
  noteController.showList();
  if (noteController.getNoteFromUrl(window.location) !== "0") {
    console.log("Error: testCanGetNoteId " + noteController.getNoteFromUrl(window.location));
  } else {
    console.log("Passed: testCanGetNoteId");
  }
}

testNoteControllerIsInstantiated();
testCanGetNoteId();
