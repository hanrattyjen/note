'use strict';

var noteList = new NoteList();

 noteList.addNote("Favourite drink: seltzer");
 noteList.addNote("Favourite food: eggs");

var noteView = new NoteView();
var noteController = new NoteController(noteView, noteList);
noteController.addEventListeners();
noteController.showList();
