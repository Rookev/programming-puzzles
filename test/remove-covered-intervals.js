const moduleRemoveCoveredIntervals = require('../js/remove-covered-intervals.js');
const removeCoveredIntervals = moduleRemoveCoveredIntervals.removeCoveredIntervals;

QUnit.module('Remove covered intervals');

QUnit.test('2 uncovered', assert => {
  var aTestData = [[1, 4], [3, 6], [2, 8]];
  var nExpected = 2;
  var nActual = removeCoveredIntervals(aTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('2 uncovered', assert => {
  var aTestData = [[3, 10], [4, 10], [5, 11]];
  var nExpected = 2;
  var nActual = removeCoveredIntervals(aTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('1 uncovered', assert => {
  var aTestData = [[1, 4], [2, 3]];
  var nExpected = 1;
  var nActual = removeCoveredIntervals(aTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('1 uncovered', assert => {
  var aTestData = [[1, 2], [1, 4], [3, 4]];
  var nExpected = 1;
  var nActual = removeCoveredIntervals(aTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('All uncovered', assert => {
  var aTestData = [[0, 10], [5, 12]];
  var nExpected = 2;
  var nActual = removeCoveredIntervals(aTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('None uncovered', assert => {
  var aTestData = [[0, 10], [0, 10], [0, 10], [0, 10], [0, 10], [0, 10]];
  var nExpected = 0;
  var nActual = removeCoveredIntervals(aTestData);

  assert.equal(nActual, nExpected);
});