'use strict';

(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.addNote = function(text) {
    var noteId = this.notes.length;
    var note = new Note(noteId, text);
    this.notes.push(note);
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes;
  };

  exports.NoteList = NoteList;
})(this);
