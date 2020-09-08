const moduleTwoSum = require('../js/two-sum.js');
const twoSum = moduleTwoSum.twoSum;

QUnit.module('Two Sum');

QUnit.test('2 elements', assert => {
  var aTestNums = [3, 3];
  var nTestTarget = 6;
  var aExpectedIndices = [0, 1];
  var nActualIndices = twoSum(aTestNums, nTestTarget);

  assert.deepEqual(nActualIndices, aExpectedIndices);
});

QUnit.test('3 elements', assert => {
  var aTestNums = [3, 2, 4];
  var nTestTarget = 6;
  var aExpectedIndices = [1, 2];
  var nActualIndices = twoSum(aTestNums, nTestTarget);

  assert.deepEqual(nActualIndices, aExpectedIndices);
});

QUnit.test('4 elements', assert => {
  var aTestNums = [2, 7, 11, 15];
  var nTestTarget = 9;
  var aExpectedIndices = [0, 1];
  var nActualIndices = twoSum(aTestNums, nTestTarget);

  assert.deepEqual(nActualIndices, aExpectedIndices);
});

QUnit.test('Non matching elements', assert => {
  var aTestNums = [1, 2, 3, 4, 5];
  var nTestTarget = 17;
  var aExpectedIndices = [];
  var nActualIndices = twoSum(aTestNums, nTestTarget);

  assert.deepEqual(nActualIndices, aExpectedIndices);
});