var Record = require('./record');

var RecordStore = function(name,city,records,balance){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = balance;
  this.preOwnedRecords = [];
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
  addPreOwned: function(record){
    var newRecord = record;
    newRecord.copies +=1;
    this.preOwnedRecords.push(newRecord);
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
  displayTotalValue: function(){
  var stockValue = 0;
  for(var i=0; i < this.records.length; i++){
    if(this.records[i].copies > 0){
     stockValue += (this.records[i].price * this.records[i].copies);
    }else{ 
    stockValue += this.records[i].price;
    }
  }  
    console.log("stock value :£ " + (stockValue.toString()));
    console.log("cash balance : " + (this.displayBalance()));
    console.log("total worth :£ " + (stockValue + this.balance).toString());
  },  
  listRecords: function(){
   for(var i = 0; i < this.records.length; i++){
    console.log(this.records[i]);
   }
  }
  

}
testRecord = new Record("Ok Computer","Radiohead",6.88);
testRecord2 = new Record("Geogaddi","Boards of Canada",12.34);
testStore = new RecordStore("Fopp","Glasgow",[],1000.00);
testStore.addRecord(testRecord);
testStore.addRecord(testRecord2);
testStore.addCopy(testRecord2);
testStore.displayTotalValue();

module.exports = RecordStore;