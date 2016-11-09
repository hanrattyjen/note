'use strict';

(function(exports) {
  function NoteController(view) {
    this.subString = view.restrictLength();
    this.htmlBody = view.html(this.subString);
  }

  NoteController.prototype.showList = function () {
    document.getElementById('app').innerHTML = this.htmlBody;
  };

  exports.NoteController = NoteController;
})(this);
