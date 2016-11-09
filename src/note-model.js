'use strict';

(function(exports) {
  function Note(index, text) {
    this.index = index;
    this.text = text;
  }

  Note.prototype.returnText = function () {
    return this.text;
  };

  Note.prototype.returnId = function() {
    return this.index;
  }

  exports.Note = Note;
})(this);
