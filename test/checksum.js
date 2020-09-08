const moduleChecksum = require('../js/checksum.js');
const checksum = moduleChecksum.checksum;

QUnit.module('Checksum');

QUnit.test('7', assert => {
  var nTestData = 7;
  var nExpected = 7;
  var nActual = checksum(nTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('17', assert => {
  var nTestData = 17;
  var nExpected = 8;
  var nActual = checksum(nTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('100', assert => {
  var nTestData = 100;
  var nExpected = 1;
  var nActual = checksum(nTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('0', assert => {
  var nTestData = 0;
  var nExpected = 0;
  var nActual = checksum(nTestData);

  assert.equal(nActual, nExpected);
});