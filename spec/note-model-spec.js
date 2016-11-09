'use strict';

function testNoteReturnsText() {
  var note = new Note(0, "Hello World");
  assert.isTrue(note.returnText() === "Hello World");
  assert.isTrue(note.returnId() === 0);
};

testNoteReturnsText();
