
  var assert = {
    isTrue: function(describe, assertionToCheck){
      if (!assertionToCheck){
        throw new Error("assertion failed: " + assertionToCheck + "is not truthy");
      } else{
        console.log('is true')
      }
    },

    isContained: function(describe, id, expected){
      if (document.getElementById(id) === expected){
        throw new Error(describe + "is not contained");
      } else{
        console.log('is true')
      }
    }
  };




  var noteController = new NoteController();

  function testsInstance(){
    if(typeof noteController !== 'object'){
      throw new Error("Help")
    } else {
      console.log("noteController is an instance of NoteController")
    }
  }


  function testSwitchHTML () {
    noteController.addNote('hi')
    if(noteController.switchHTML() !== `<ul><li><div><a href="#notes/1">hi</a></div></li></ul>`){
      throw new Error('oh no!')  } else {
        console.log("note added as html")
      }
  }
  // function DoubleNote () {this._text = "hello"; this.id = 1 }
  // DoubleNote.prototype.text = function () { return this._text }
  //
  // function DoubleNoteList (notes) { this._list = [notes] }
  // DoubleNoteList.prototype.returnNotes = function(){ return this._list }
  //
  // var noteListView = new NoteListView(new DoubleNoteList(new DoubleNote()));

  function addNotes() {

    var noteList = new NoteList();
    noteList.saveAndCreateNote('new note');
    noteList.saveAndCreateNote('new note2');
    var noteListView = new NoteListView(noteList)
    var noteController = new NoteController(noteListView);
    noteController.switchHTML();
    noteController.singleNotePost();
  }


  testSwitchHTML();
  testsInstance();
  addNotes();
