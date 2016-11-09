'use strict';

(function(exports) {

  function View(list){
    this.viewList = list.showAllNotes();
  }

  View.prototype.convertToHTML = function() {
   htmlString = "<ul>";
   for (var i = 0; i < this.viewList.length; i++) {
     htmlString += "<li><div>" + this.viewList[i] + "</div></li>;"
   }
   htmlString += "</ul>";
   return htmlString;
   console.log(htmlString);
  };

  exports.View = View;
})(this);
