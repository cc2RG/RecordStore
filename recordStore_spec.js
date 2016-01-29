var RecordStore = require('./recordStore.js');
var Record =  require('./record.js');
var chai = require('chai');
var assert = chai.assert;



describe('record store', function(){
  it('should have a name, city, and balance', function(){
    var testStore = new RecordStore("Fopp","Glasgow",[],1000.99 )
    assert.equal("Fopp", testStore.name); 
    assert.equal("Glasgow", testStore.city);
    assert.equal(1000.99, testStore.balance);
  });
  it('should be able to display the balance', function(){
    var testStore = new RecordStore("Rubadub", "Glasgow",[],600.23 )
    assert.equal("£600.23", testStore.displayBalance)
  });
  it ('should be able to add a record to the collection of records', function(){
    var testRecord = new Record("Sound of Silver", "LCD Soundsystem",[], 11.99);
    var testStore = new RecordStore("Grouchos","Dundee",[],1100.55)
    testStore.addRecord(testRecord);
    assert.equal(1,testStore.records.length);
    assert.equal("Sound of Silver", testStore.records[0].title)
  });
  
});
