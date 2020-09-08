const moduleTwoSum = require('../js/two-sum.js');
const twoSum = moduleTwoSum.twoSum;

QUnit.module('two-sum');

QUnit.test('Two-Sum of 2 elements array', assert => {
  var aTestNums = [3,3];
  var nTestTarget = 6;
  var aExpectedIndices = [0,1];
  var nActualIndices = twoSum(aTestNums, nTestTarget);

  assert.deepEqual(nActualIndices, aExpectedIndices, 'Two-Sum of 2 elements array wrong');
});

QUnit.test('Two-Sum of 3 elements array', assert => {
  var aTestNums = [3,2,4];
  var nTestTarget = 6;
  var aExpectedIndices = [1,2];
  var nActualIndices = twoSum(aTestNums, nTestTarget);

  assert.deepEqual(nActualIndices, aExpectedIndices, 'Two-Sum of 3 elements array wrong');
});

QUnit.test('Two-Sum of 4 elements array', assert => {
  var aTestNums = [2,7,11,15];
  var nTestTarget = 9;
  var aExpectedIndices = [0,1];
  var nActualIndices = twoSum(aTestNums, nTestTarget);

  assert.deepEqual(nActualIndices, aExpectedIndices, 'Two-Sum of 4 elements array wrong');
});

QUnit.test('Two-Sum of non matching array', assert => {
  var aTestNums = [1,2,3,4,5];
  var nTestTarget = 17;
  var aExpectedIndices = [];
  var nActualIndices = twoSum(aTestNums, nTestTarget);

  assert.deepEqual(nActualIndices, aExpectedIndices, 'Two-Sum of non matching array wrong');
});