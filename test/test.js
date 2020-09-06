const sumOfNumbers = require('../js/sum-of-numbers/sum-of-numbers.js');
const add = require('../js/sum-of-numbers/sum-of-numbers.js');

QUnit.module('sumOfNumbers');

QUnit.test('Sum of 1 number', assert => {
  var aTestData = [17];
  var nExpected = 17;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of 1 number wrong');
});

QUnit.test('Sum of 3 numbers', assert => {
  var aTestData = [1,2,3];
  var nExpected = 6;
  var nActual = sumOfNumbers(aTestData);

  assert.equal(nActual, nExpected, 'Sum of 3 numbers wrong');
});

