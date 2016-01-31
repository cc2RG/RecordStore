var Record = require('./record');

var RecordStore = function(name,city,records,balance){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = balance;
}

RecordStore.prototype = {
  addRecord: function(record){
    var newRecord = record;
    newRecord.copies +=1;
    this.records.push(newRecord);
    this.balance -= newRecord.price;

  },
  addCopy: function(record){
    var newRecord = record;
    newRecord.copies +=1;
    this.balance -= newRecord.price;
  
  
  },
  sellRecord: function(record){
    var soldRecord = record;
    soldRecord.copies -= 1;
    this.balance += soldRecord.price;
  },
  changeBalance: function(amount){

  },
  displayBalance: function(){
  var prettyBalance = "£" + (this.balance.toString());
  return prettyBalance;  
  },
  listRecords: function(){
   for(var i = 0; i < this.records.length; i++){
    console.log(this.records[i]);
   }
  }
  

}


var testStore = new RecordStore("test","Test",[],100.00);
var testRecord = new Record("title","artist",[],12.00);
testStore.addRecord(testRecord);
testStore.listRecords();

module.exports = RecordStore;