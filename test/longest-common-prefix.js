const moduleLongestCommonPrefix = require('../js/longest-common-prefix.js');
const longestCommonPrefix = moduleLongestCommonPrefix.longestCommonPrefix;

QUnit.module('Longest Common Prefix');

QUnit.test('Matching 3 strings', assert => {
  var aTestData = ["flower", "flow", "flight"];
  var sExpected = "fl";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected);
});

QUnit.test('Matching 4 strings', assert => {
  var aTestData = ["flower", "flow", "flight", "fox"];
  var sExpected = "f";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected);
});

QUnit.test('Matching 5 strings', assert => {
  var aTestData = ["flower", "flow", "flight", "fly", "fluent"];
  var sExpected = "fl";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected);
});

QUnit.test('Non-matching 3 strings', assert => {
  var aTestData = ["dog", "racecar", "car"];
  var sExpected = "";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected);
});

QUnit.test('Single string', assert => {
  var aTestData = ["dog"];
  var sExpected = "dog";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected);
});

QUnit.test('No string', assert => {
  var aTestData = [];
  var sExpected = "";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected);
});