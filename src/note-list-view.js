'use strict';

(function(exports) {
  function NoteView(list) {
    this.notes = list.getNotes();
  }

  NoteView.prototype.getNoteListHTML = function(noteList) {
    var noteListHTML = "<ul>";
    for (var i = 0; i < noteList.length; i++) {
      noteListHTML += "<li>" + "<a href=\"#notes/" + i + "\"><div>" + noteList[i] + "</div></a></li>";
    }
    noteListHTML += "</ul>";
    return noteListHTML;
  }

  NoteView.prototype.getNoteTitleList = function() {
    var noteTitleList = [];
    for (var i = 0; i < this.notes.length; i++) {
      var noteTitle = this.notes[i].getText().substr(0, 19);
      noteTitleList.push(noteTitle);
    }
    return noteTitleList;
  }

  exports.NoteView = NoteView;
})(this);
