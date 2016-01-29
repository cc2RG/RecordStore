var Record = require('./record');
var chai = require('chai');
var assert = chai.assert;


describe('record', function(){
  it('The record has a name, artist and a price',function(){
    var testRecord = new Record("Black Sands","Bonobo",6.99)
    assert.equal("Black Sands", testRecord.title);
    assert.equal("Bonobo", testRecord.artist);
    assert.equal(6.99, testRecord.price);
  });
})