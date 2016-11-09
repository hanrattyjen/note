'use strict';

(function(exports) {
  function NoteView(list) {
    this.notes = list.returnNotes();
  }

  NoteView.prototype.html = function(noteSubstring) {
    var htmlString = "<ul>";
    for (var i = 0; i < noteSubstring.length; i++) {
      htmlString += "<li><div>" + noteSubstring[i] + "</div></li>";
    }
    htmlString += "</ul>";
    return htmlString;
  }

  NoteView.prototype.restrictLength = function() {
    var noteSubstring = [];
    for (var i = 0; i < this.notes.length; i++) {
      var singleNote = (this.notes[i].returnText());
      var singleNoteRestrict = singleNote.substr(0, 19);
      noteSubstring.push(singleNoteRestrict);
    }
    return noteSubstring;
  }

  exports.NoteView = NoteView;
})(this);
