const moduleLongestNonrepeatingSubstring = require('../js/longest-nonrepeating-substring.js');
const longestNonrepeatingSubstring = moduleLongestNonrepeatingSubstring.longestNonrepeatingSubstring;

QUnit.module('Longest Nonrepeating Substring');

QUnit.test('Length 0', assert => {
  var sTestData = "";
  // ""
  var nExpected = 0;
  var nActual = longestNonrepeatingSubstring(sTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('Length 1', assert => {
  var sTestData = "bbbbb";
  // "b"
  var nExpected = 1;
  var nActual = longestNonrepeatingSubstring(sTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('Length 3', assert => {
  var sTestData = "abcabcbb";
  // "abc"
  var nExpected = 3;
  var nActual = longestNonrepeatingSubstring(sTestData);

  assert.equal(nActual, nExpected);
});

QUnit.test('Length 5', assert => {
  var sTestData = "pwwkeswp";
  // "keswp"
  var nExpected = 5;
  var nActual = longestNonrepeatingSubstring(sTestData);

  assert.equal(nActual, nExpected);
});

