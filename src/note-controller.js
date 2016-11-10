'use strict';

(function(exports) {
  var self;

  function NoteController(view, noteList) {
    self = this;
    self.view = view;
    self.noteList = noteList;
  }

  NoteController.prototype.addEventListeners = function() {
    window.onhashchange = self.handleNoteClickedEvent;
    window.onsubmit = self.handleSubmitEvent;
  };

  NoteController.prototype.handleNoteClickedEvent = function() {
    var noteId = location.hash.split("#notes/")[1];
    var note = self.noteList.getNotes()[noteId].getText();
    document.getElementById('note-detail').innerHTML = note;
  };

  NoteController.prototype.handleSubmitEvent = function(e) {
    e.preventDefault();
    var text = e.srcElement[1].value;
    console.log(text);
    self.noteList.addNote(text);
    self.showList();
  };

  NoteController.prototype.showList = function () {
    self.noteTitleList = self.view.getNoteTitleList(self.noteList.getNotes());
    self.htmlBody = self.view.getNoteListHTML(self.noteTitleList.getNotes());
    document.getElementById('note').innerHTML = self.htmlBody;
  };

  exports.NoteController = NoteController;
})(this);
