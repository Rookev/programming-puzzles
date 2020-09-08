/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * All given inputs are in lowercase letters a-z.
 * 
 * @param {*} strs Array of strings
 */
function longestCommonPrefix(strs) {
    let sLongestCommonPrefix = "";

    // Base case: empty array
    if (strs.length === 0) {
        return "";
    }

    // Base case: single string
    if (strs.length === 1) {
        return strs[0];
    }

    // At least two strings: start with the longest common prefix
    sLongestCommonPrefix = determineCommonPrefix(strs[0], strs[1]);

    // From now on the longest prefix can only become shorter (because else the first common prefix would have been longer),
    // so keep comparing the current longest common prefix to each of the leftover strings
    let sPossiblyReducedPrefix = "";
    for (let i = 2; i < strs.length; i++) {
        sPossiblyReducedPrefix = determineCommonPrefix(sLongestCommonPrefix, strs[i]);
        // The longest common prefix has to be reduced
        if (sPossiblyReducedPrefix.length < sLongestCommonPrefix.length) {
            sLongestCommonPrefix = sPossiblyReducedPrefix;
        }
    }

    return sLongestCommonPrefix;
}

/**
 * Determine the common prefix among two strings.
 * 
 * @param {*} str1 
 * @param {*} str2 
 */
function determineCommonPrefix(str1, str2) {
    let sCommonPrefix = "";
    let i = 0;
    let sCurrentCharStr1 = "";
    let sCurrentCharStr2 = "";

    while ((sCurrentCharStr1 = str1.charAt(i)) && (sCurrentCharStr2 = str2.charAt(i))) {
        if (sCurrentCharStr1 === sCurrentCharStr2) {
            sCommonPrefix += sCurrentCharStr1;
            i++;
        }

        else {
            break;
        }
    }

    return sCommonPrefix;
}

module.exports = {
    longestCommonPrefix: longestCommonPrefix
};