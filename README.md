# programming-puzzles
Various programming puzzles and algorithms, e.g. LeetCode and similar. Because this coding is used nowhere in production my implementations are based mainly on valid and meaningful inputs (i.e. not every "NaN" or "undefined" malformed input combination or type mismatch is being handled). Therefore the unit tests do not guarantee complete functional correctness. They ensure basic correctness of the algorithm and serve as a reader's entry point. Development happens test-driven. 

## Prerequisites
* [Node.js](https://nodejs.org/)
* [QUnit](https://qunitjs.com/)

## How to run the tests
* Clone this repo
* Run `npm test`

## Repository structure
* [Implementations: js](js)
* [Unit tests: test](test)

## Algorithms
| Algorithm | Implementation | Unit Tests |
|:-:|:-:|:-:|
| Sum Of Numbers | [Implementation](js/sum-of-numbers.js) | [Unit Tests](test/sum-of-numbers.js) |
| Checksum | [Implementation](js/checksum.js) | [Unit Tests](test/checksum.js) |
| Two Sum | [Implementation](js/two-sum.js) | [Unit Tests](test/two-sum.js) |
| Longest Common Prefix | [Implementation](js/longest-common-prefix.js) | [Unit Tests](test/longest-common-prefix.js) |
| Search 2D Matrix | [Implementation](js/search-2d-matrix.js) | [Unit Tests](test/search-2d-matrix.js) |
| Longest Nonrepeating Substring | [Implementation](js/longest-nonrepeating-substring.js) | [Unit Tests](test/longest-nonrepeating-substring.js) |
| Remove Covered Intervals | [Implementation](js/remove-covered-intervals.js) | [Unit Tests](test/remove-covered-intervals.js) |