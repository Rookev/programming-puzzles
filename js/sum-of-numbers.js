/**
 * Given an array of integers nums, return the sum of all numbers in that array
 * 
 * @param {*} nums The array of which the sum is returned
 */
function sumOfNumbers(nums) {
    let sum = 0;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
    }

    return sum;
}

module.exports = sumOfNumbers;