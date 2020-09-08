const moduleLongestCommonPrefix = require('../js/longest-common-prefix.js');
const longestCommonPrefix = moduleLongestCommonPrefix.longestCommonPrefix;

QUnit.module('longest-common-prefix');

QUnit.test('Longest common prefix of matching 3 strings', assert => {
  var aTestData = ["flower","flow","flight"];
  var sExpected = "fl";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected, 'Longest common prefix of matching 3 strings wrong');
});

QUnit.test('Longest common prefix of matching 4 strings', assert => {
  var aTestData = ["flower","flow","flight", "fox"];
  var sExpected = "f";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected, 'Longest common prefix of matching 4 strings wrong');
});

QUnit.test('Longest common prefix of matching 5 strings', assert => {
  var aTestData = ["flower","flow","flight", "fly", "fluent"];
  var sExpected = "fl";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected, 'Longest common prefix of matching 5 strings wrong');
});

QUnit.test('Longest common prefix of non-matching 3 strings', assert => {
  var aTestData = ["dog","racecar","car"];
  var sExpected = "";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected, 'Longest common prefix of non-matching 3 strings wrong');
});

QUnit.test('Longest common prefix of single string', assert => {
  var aTestData = ["dog"];
  var sExpected = "dog";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected, 'Longest common prefix of single string wrong');
});

QUnit.test('Longest common prefix of no string', assert => {
  var aTestData = [];
  var sExpected = "";
  var sActual = longestCommonPrefix(aTestData);

  assert.equal(sActual, sExpected, 'Longest common prefix of no string wrong');
});