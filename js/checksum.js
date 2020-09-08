/**
 * Given an integer num, return its checksum (sum of all digits of that number)
 * 
 * @param {*} num The number of which the checksum is returned
 */
function checksum(num) {
    let checksum = 0;

    while (num > 0) {
        checksum += num % 10;
        num /= 10;
        num = Math.floor(num);
    }

    return checksum;
}

module.exports = {
    checksum: checksum
};