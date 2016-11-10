'use strict';

(function(exports) {
  function NoteView() {
  }

  NoteView.prototype.getNoteListHTML = function(noteList) {
    var noteListHTML = "<ul>";
    for (var i = 0; i < noteList.length; i++) {
      noteListHTML += "<li>" + "<a href=\"#notes/" + i + "\"><div>" + noteList[i].getText() + "</div></a></li>";
    }
    noteListHTML += "</ul>";
    return noteListHTML;
  }

  NoteView.prototype.getNoteTitleList = function(noteList) {
    var noteTitleList = new NoteList();
    for (var i = 0; i < noteList.length; i++) {
      var noteTitle = noteList[i].getText().substr(0, 19);
      noteTitleList.addNote(noteTitle);
    }
    return noteTitleList;
  }

  exports.NoteView = NoteView;
})(this);
