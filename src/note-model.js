'use strict';

(function(exports) {

  function Note(note){
    this.text = note;
  }

  Note.prototype.returnNote = function () {
   return this.text;
  };

  exports.Note = Note;

})(this);
