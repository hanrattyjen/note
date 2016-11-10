'use strict';

function testNoteControllerIsInstantiated() {
  var noteList = new NoteList();
  noteList.addNote("Note number 1");
  var noteView = new NoteView();
  var noteController = new NoteController(noteView, noteList);

  if(noteController.htmlBody !== "<ul><li><a href=\"#notes/0\"><div>Note number 1</div></a></li></ul>") {
    console.log("Error testNoteControllerIsInstantiated: " + noteController.htmlBody);
  } else {
    console.log("Passed testNoteControllerIsInstantiated: " + noteController.htmlBody);
  }

  noteController.showList();
  if(document.getElementById('note').innerHTML !== "<ul><li><a href=\"#notes/0\"><div>Note number 1</div></a></li></ul>") {
    console.log("Error: innerHTMl is not set");
  } else {
    console.log("Passed: innerHTML has been set, YOU BEAUTY");
  }
}

testNoteControllerIsInstantiated();
