const moduleSumOfNumbers = require('../js/sum-of-numbers.js');

const sumOfNumbersForLoop = moduleSumOfNumbers.sumOfNumbersForLoop;
const sumOfNumbersWhileLoop = moduleSumOfNumbers.sumOfNumbersWhileLoop;
const sumOfNumbersRecursion = moduleSumOfNumbers.sumOfNumbersRecursion;

QUnit.module('Sum Of Numbers');

QUnit.test('1 number', assert => {
  var aTestData = [17];
  var nExpected = 17;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected);
  assert.equal(nActualWhileLoop, nExpected);
  assert.equal(nActualRecursion, nExpected);
});

QUnit.test('2 numbers', assert => {
  var aTestData = [17, 13];
  var nExpected = 30;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected);
  assert.equal(nActualWhileLoop, nExpected);
  assert.equal(nActualRecursion, nExpected);
});

QUnit.test('3 numbers', assert => {
  var aTestData = [1, 2, 3];
  var nExpected = 6;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected);
  assert.equal(nActualWhileLoop, nExpected);
  assert.equal(nActualRecursion, nExpected);
});

QUnit.test('1 negative number', assert => {
  var aTestData = [-17];
  var nExpected = -17;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected);
  assert.equal(nActualWhileLoop, nExpected);
  assert.equal(nActualRecursion, nExpected);
});

QUnit.test('2 negative numbers', assert => {
  var aTestData = [-17, -13];
  var nExpected = -30;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected);
  assert.equal(nActualWhileLoop, nExpected);
  assert.equal(nActualRecursion, nExpected);
});

QUnit.test('No numbers', assert => {
  var aTestData = [];
  var nExpected = 0;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected);
  assert.equal(nActualWhileLoop, nExpected);
  assert.equal(nActualRecursion, nExpected);
});

QUnit.test('Alternating numbers', assert => {
  var aTestData = [-17, 17];
  var nExpected = 0;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected);
  assert.equal(nActualWhileLoop, nExpected);
  assert.equal(nActualRecursion, nExpected);
});