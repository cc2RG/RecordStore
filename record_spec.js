var Record = require('./record');
var chai = require('chai');
var assert = chai.assert;
var RecordStore = require('./recordStore');

describe('record', function(){
  it('The record has a name, artist and a price',function(){
    var testRecord = new Record("Black Sands","Bonobo",6.99)
    assert.equal("Black Sands", testRecord.title);
    assert.equal("Bonobo", testRecord.artist);
    assert.equal(6.99, testRecord.price);
  });
  it('should incriment its copies by 1, when added to a record store', function(){
    var testRecord = new Record("Black Sands","Bonobo",6.99);
    var testStore = new RecordStore("Fopp","Glasgow",[],7000.00);
    testStore.addRecord(testRecord);
    assert.equal(1, testRecord.copies);
    assert.equal(1, testStore.records[0].copies)
  });
})