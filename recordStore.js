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
  displayTotalValue: function(){
  var stockValue = 0;
  for(var i=0; i < this.records.length; i++){
    stockValue += this.records[i].price;
  }  
    return "stock value :£ " + (stockValue.toString());
    return "cash balance : " + (this.displayBalance());
    return "total worth : " + (stockValue + this.balance).toString();
  },  
  listRecords: function(){
   for(var i = 0; i < this.records.length; i++){
    console.log(this.records[i]);
   }
  }
  

}




module.exports = RecordStore;