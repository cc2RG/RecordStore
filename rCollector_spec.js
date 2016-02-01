var rCollector = require('./rCollector')
var RecordStore = require('./recordStore.js');
var Record =  require('./record.js');
var chai = require('chai');
var assert = chai.assert;

describe('rCollector', function(){
  it('should have a name and balance',function(){
    testCollector = new rCollector("John Doe", 500);
    assert.equal("John Doe", testCollector.name);
    assert.equal(500, testCollector.balance);
  });
  it('should be able to buy a record and have its cost come out of the balance', function(){
    var testRecord = new Record("Sound of Silver", "LCD Soundsystem",11.99);
    var testStore = new RecordStore("Grouchos","Dundee",[],1100.55);
    testCollector = new rCollector("John Doe", 500);
    testStore.addRecord(testRecord);
    testCollector.buyRecord(testRecord,testStore);
    assert.equal(1,testCollector.records.length);
    assert.equal(488.01, testCollector.balance);
  });
  it('should be able to sell a record and have its balance gain its value ,minus 15%', function(){
    var testRecord = new Record("Sound of Silver", "LCD Soundsystem",11.99);
    var testStore = new RecordStore("Grouchos","Dundee",[],1100.55);
    var testStoreTwo = new RecordStore("Tower Records", "Glasgow",[],900.00);
    testCollector = new rCollector("John Doe", 500);
    testStore.addRecord(testRecord);
    testCollector.buyRecord(testRecord,testStore);
    testCollector.sellRecord(testRecord,testStoreTwo);
    assert.equal(0, testCollector.records.length);
    assert.equal(497.0025, testCollector.balance);
  });
});