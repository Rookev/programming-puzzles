const moduleSearch2DMatrix = require('../js/search-2d-matrix.js');
const search2DMatrix = moduleSearch2DMatrix.search2DMatrix;

QUnit.module('Search 2D Matrix');

QUnit.test('Existing value (first row)', assert => {
  var aTestMatrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ];
  var nTarget = 7;
  var bExpected = true;
  var bActual = search2DMatrix(aTestMatrix, nTarget);

  assert.equal(bActual, bExpected);
});

QUnit.test('Existing value (middle row)', assert => {
  var aTestMatrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ];
  var nTarget = 10;
  var bExpected = true;
  var bActual = search2DMatrix(aTestMatrix, nTarget);

  assert.equal(bActual, bExpected);
});

QUnit.test('Existing value (last row)', assert => {
  var aTestMatrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ];
  var nTarget = 23;
  var bExpected = true;
  var bActual = search2DMatrix(aTestMatrix, nTarget);

  assert.equal(bActual, bExpected);
});

QUnit.test('Non-existing value (too high)', assert => {
  var aTestMatrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ];
  var nTarget = 100;
  var bExpected = false;
  var bActual = search2DMatrix(aTestMatrix, nTarget);

  assert.equal(bActual, bExpected);
});

QUnit.test('Non-existing value (too low)', assert => {
  var aTestMatrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ];
  var nTarget = 0;
  var bExpected = false;
  var bActual = search2DMatrix(aTestMatrix, nTarget);

  assert.equal(bActual, bExpected);
});