const checksum = require('../js/checksum/checksum.js');

QUnit.module('checksum');

QUnit.test('Checksum of 7', assert => {
  var nTestData = 7;
  var nExpected = 7;
  var nActual = checksum(nTestData);

  assert.equal(nActual, nExpected, 'Checksum of 7 wrong');
});

QUnit.test('Checksum of 0', assert => {
  var nTestData = 0;
  var nExpected = 0;
  var nActual = checksum(nTestData);

  assert.equal(nActual, nExpected, 'Checksum of 0 wrong');
});

QUnit.test('Checksum of 17', assert => {
  var nTestData = 17;
  var nExpected = 8;
  var nActual = checksum(nTestData);

  assert.equal(nActual, nExpected, 'Checksum of 17 wrong');
});
