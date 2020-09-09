/**
 * Given a string str, find the length of the longest substring without repeating characters.
 * 
 * @param {*} str 
 */
function longestNonrepeatingSubstring(str) {
    let sLongestNonrepeatingSubstring = "";
    let sPossibleLongestNonrepeatingSubstring = "";
    let sCurrentChar = "";

    // Review substrings starting at each index
    for (let i = 0; i < str.length; i++) {
        sPossibleLongestNonrepeatingSubstring = "";

        // Fixed starting point (i), now keep adding nonrepeating characters
        for (let j = i; j < str.length; j++) {
            sCurrentChar = str.charAt(j);

            // Char is contained -> stop, longest nonrepeating substring from starting point (i) found
            if (sPossibleLongestNonrepeatingSubstring.indexOf(sCurrentChar) >= 0) {
                break;   
            }

            // Loop not broken because char is not yet contained -> increase result string
            sPossibleLongestNonrepeatingSubstring += sCurrentChar;
        }

        // Retrieved longest nonrepeating substring from starting point (i), compare length and refresh global result if appropriate
        if (sPossibleLongestNonrepeatingSubstring.length > sLongestNonrepeatingSubstring.length) {
            sLongestNonrepeatingSubstring = sPossibleLongestNonrepeatingSubstring;
        }
    }
    return sLongestNonrepeatingSubstring.length;
}

module.exports = {
    longestNonrepeatingSubstring: longestNonrepeatingSubstring
};