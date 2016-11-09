'use strict';

function testNoteControllerIsInstantiated() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  var noteView = new NoteView(noteList);
  var noteController = new NoteController(noteView);

  noteController.showList();

  if(noteController.htmlBody !== "<ul><li><div>Hello Glasgae</div></li></ul>") {
    console.log("Error: " + noteController.htmlBody);
  } else {
    console.log("Passed: " + noteController.htmlBody);
  }

  if(document.getElementById("app").innerHTML !== "<ul><li><div>Hello Glasgae</div></li></ul>") {
    console.log("Error: innerHTMl is not set");
  } else {
    console.log("Passed: innerHTML has been set, YOU BEAUTY");
  }
}

testNoteControllerIsInstantiated();
