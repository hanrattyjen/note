'use strict';

function testNoteReturnsText() {
  var note = new Note(0, "Hello World");
  assert.isTrue(note.getText() === "Hello World");
  assert.isTrue(note.getId() === 0);
};

testNoteReturnsText();
