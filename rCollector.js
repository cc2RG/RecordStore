var RecordStore = require('./recordStore')
var _ = require('lodash');

var RCollector = function(name,balance){
this.name = name;    
this.balance = balance;
this.records = [];  
}


RCollector.prototype = {
buyRecord: function(record, recordStore){
  this.records.push(record);
  this.balance -= record.price;
  recordStore.sellRecord(record);
},
sellRecord: function(record, recordStore){
 var newArray = _.pull(this.records, record);
 this.records = newArray;
 this.balance += record.price;
 recordStore.addRecord(record);
}


}

module.exports = RCollector;