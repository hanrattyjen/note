'use strict';

(function(exports) {
  function NoteController(view, noteList) {
    this.noteList = noteList;
    this.noteTitleList = view.getNoteTitleList(noteList.getNotes());
    this.htmlBody = view.getNoteListHTML(this.noteTitleList.getNotes());
  }

  NoteController.prototype.makeUrlChangeShowNotesforCurrentPage = function() {
    window.onhashchange = showClickedNote;
  };

  function showClickedNote() {
    showSingleNote(getNoteFromUrl());
  };

  function getNoteFromUrl() {
    var noteId = location.hash.split("#notes/")[1];
    return noteId;
  };

  function showSingleNote(noteId) {
    var note = noteList.getNotes()[noteId].getText();
    document.getElementById('note-detail').innerHTML = note;
  };

  NoteController.prototype.showList = function () {
    document.getElementById('note').innerHTML = this.htmlBody;
  };

  exports.NoteController = NoteController;
})(this);
