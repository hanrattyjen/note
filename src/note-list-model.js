'use strict';

(function(exports) {

  function List(){
   this.notes = [];
  }

  List.prototype.addNote = function (note) {
    this.notes.push(note);
  };

  List.prototype.showAllNotes = function () {
    return this.notes;
   }
  };

  exports.List = List;

  
})(this);
