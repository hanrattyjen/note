'use strict';

(function(exports) {
  function NoteController(view) {
    this.subString = view.restrictLength();
    this.htmlBody = view.html(this.subString);
  }

  NoteController.prototype.makeUrlChangeShowNotesforCurrentPage = function() {
    window.addEventListener("hashchange", showClickedNote());
  };

  NoteController.prototype.showClickedNote = function() {
    showSingleNote(getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    var noteId = location.hash.split("#notes/")[1];
    return noteId;
  };

  NoteController.prototype.showSingleNote = function(noteId) {
    var note = new Note(noteId, text);
    document.getElementbyId(noteId).innerHTML = note;
  };

  NoteController.prototype.showList = function () {
      document.getElementById('note').innerHTML = this.htmlBody;
  };

  exports.NoteController = NoteController;
})(this);
