const moduleSumOfNumbers = require('../js/sum-of-numbers.js');

const sumOfNumbersForLoop = moduleSumOfNumbers.sumOfNumbersForLoop;
const sumOfNumbersWhileLoop = moduleSumOfNumbers.sumOfNumbersWhileLoop;
const sumOfNumbersRecursion = moduleSumOfNumbers.sumOfNumbersRecursion;

QUnit.module('sum-of-numbers');

QUnit.test('Sum of 1 number', assert => {
  var aTestData = [17];
  var nExpected = 17;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected, 'For Loop: Sum of 1 number wrong');
  assert.equal(nActualWhileLoop, nExpected, 'While Loop: Sum of 1 number wrong');
  assert.equal(nActualRecursion, nExpected, 'Recursion: Sum of 1 number wrong');
});

QUnit.test('Sum of 2 numbers', assert => {
  var aTestData = [17,13];
  var nExpected = 30;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected, 'For Loop: Sum of 2 numbers wrong');
  assert.equal(nActualWhileLoop, nExpected, 'While Loop: Sum of 2 numbers wrong');
  assert.equal(nActualRecursion, nExpected, 'Recursion: Sum of 1 number wrong');
});

QUnit.test('Sum of 3 numbers', assert => {
  var aTestData = [1,2,3];
  var nExpected = 6;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected, 'For Loop: Sum of 3 numbers wrong');
  assert.equal(nActualWhileLoop, nExpected, 'While Loop: Sum of 3 numbers wrong');
  assert.equal(nActualRecursion, nExpected, 'Recursion: Sum of 3 numbers wrong');
});

QUnit.test('Sum of no numbers', assert => {
  var aTestData = [];
  var nExpected = 0;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected, 'For Loop: Sum of no numbers wrong');
  assert.equal(nActualWhileLoop, nExpected, 'While Loop: Sum of no numbers wrong');
  assert.equal(nActualRecursion, nExpected, 'Recursion: Sum of no number wrong');
});

QUnit.test('Sum of 1 negative number', assert => {
  var aTestData = [-17];
  var nExpected = -17;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected, 'For Loop: Sum of 1 negative number wrong');
  assert.equal(nActualWhileLoop, nExpected, 'While Loop: Sum of 1 negative number wrong');
  assert.equal(nActualRecursion, nExpected, 'Recursion: Sum of 1 negative number wrong');
});

QUnit.test('Sum of 2 negative numbers', assert => {
  var aTestData = [-17, -13];
  var nExpected = -30;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected, 'For Loop: Sum of 2 negative numbers wrong');
  assert.equal(nActualWhileLoop, nExpected, 'While Loop: Sum of 2 negative numbers wrong');
  assert.equal(nActualRecursion, nExpected, 'Recursion: Sum of 2 negative numbers wrong');
});

QUnit.test('Sum of alternating numbers', assert => {
  var aTestData = [-17, 17];
  var nExpected = 0;

  var nActualForLoop = sumOfNumbersForLoop(aTestData);
  var nActualWhileLoop = sumOfNumbersWhileLoop(aTestData);
  var nActualRecursion = sumOfNumbersRecursion(aTestData);

  assert.equal(nActualForLoop, nExpected, 'For Loop: Sum of alternating numbers wrong');
  assert.equal(nActualWhileLoop, nExpected, 'While Loop: Sum of alternating numbers wrong');
  assert.equal(nActualRecursion, nExpected, 'Recursion: Sum of alternating numbers wrong');
});