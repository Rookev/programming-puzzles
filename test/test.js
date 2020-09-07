const sumOfNumbers = require('../js/sum-of-numbers/sum-of-numbers.js');
const checksum = require('../js/checksum/checksum.js');

QUnit.module('sum-of-numbers');

QUnit.test('Sum of 1 number', assert => {
  var aTestData = [17];
  var nExpected = 17;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of 1 number wrong');
});

QUnit.test('Sum of 2 numbers', assert => {
  var aTestData = [17,13];
  var nExpected = 30;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of 2 numbers wrong');
});

QUnit.test('Sum of 3 numbers', assert => {
  var aTestData = [1,2,3];
  var nExpected = 6;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of 3 numbers wrong');
});

QUnit.test('Sum of no numbers', assert => {
  var aTestData = [];
  var nExpected = 0;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of no numbers wrong');
});

QUnit.test('Sum of 1 negative number', assert => {
  var aTestData = [-17];
  var nExpected = -17;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of 1 negative number wrong');
});

QUnit.test('Sum of 2 negative numbers', assert => {
  var aTestData = [-17, -13];
  var nExpected = -30;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of 2 negative numbers wrong');
});

QUnit.test('Sum of alternating numbers', assert => {
  var aTestData = [-17, 17];
  var nExpected = 0;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of alternating numbers wrong');
});


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
