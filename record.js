var Record = function(title, artist, price){
  this.title = title;
  this.artist = artist;
  this.price = price;
  this.copies = 0;
}


Record.prototype = {
  addTracklist: function(){
    //add function to create key value pairs from input, creating  song titles as keys and runtime as values.
    this.tracklist = [];
  },
  addTracks: function(){

  }
}

module.exports = Record;