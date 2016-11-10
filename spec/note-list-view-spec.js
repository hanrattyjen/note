'use strict';

function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("Hello Glasgae");
  noteList.addNote("Bye!");
  noteList.addNote("This note is alot longer than all the other notes, it should be cut down to roughly 20 characters")
  var noteView = new NoteView(noteList);

  if (noteView.html(["Hello Glasgae", "Bye!", "This note is alot lo"]) !== "<ul><li><a href=\"#notes/0\"><div>Hello Glasgae</div></a></li><li><a href=\"#notes/1\"><div>Bye!</div></a></li><li><a href=\"#notes/2\"><div>This note is alot lo</div></a></li></ul>") {
    console.log("Error: testNoteListView" + (noteView.html(["Hello Glasgae", "Bye!", "This note is alot lo"])));
  } else {
    console.log("Passed: testNoteListView");
  }
}

function testNoteLessThanTwentyCharacters() {
  var noteList = new NoteList();
  noteList.addNote("This note is alot longer than all the other notes, it should be cut down to roughly 20 characters");

  var noteView = new NoteView(noteList);

  if (noteView.restrictLength()[0] !== "This note is alot l") {
    console.log(noteView.restrictLength()[0]);
    console.log("Fail testNoteLessThanTwentyCharacters");
  } else {
    console.log("Pass testNoteLessThanTwentyCharacters");
  }
}

testNoteListView();
testNoteLessThanTwentyCharacters();
