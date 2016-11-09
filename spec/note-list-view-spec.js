'use strict';

function sendNoteAsHTML(){
  var list = new List();
  list.addNote("Convert this to HTML");
  // console.log(list);
  var view = new View(list);
  console.log(view);
  assert.isTrue(view.convertToHTML(list) === "<ul><li><div>Convert this to HTML</div></li></ul>");
}

sendNoteAsHTML();
