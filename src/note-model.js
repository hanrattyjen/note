'use strict';

(function(exports) {
  function Note(index, text) {
    this.index = index;
    this.text = text;
  }

  Note.prototype.getText = function () {
    return this.text;
  };

  Note.prototype.getId = function() {
    return this.index;
  }

  exports.Note = Note;
})(this);
