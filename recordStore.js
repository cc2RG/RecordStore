var RecordStore = function(name,city,records,balance){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = balance;
}

RecordStore.prototype = {
  addRecord: function(record){
    var newRecord = record;
    record.copies += 1;
    this.records.push(record);
  },
  removeRecord: function(record){

  },
  sellRecord: function(record){

  },
  changeBalance: function(){

  },
  displayBalance: function(){
    return ("£" + (this.balance));
  // convert this.balance to type string before addition
  },
  listRecords: function(){
    // iterate through the records array and return the inventory
  }

}

module.exports = RecordStore;