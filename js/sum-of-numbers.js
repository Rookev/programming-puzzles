/**
 * Given an array of integers nums, return the sum of all numbers in that array. Use a for loop.
 * 
 * @param {*} nums The array of which the sum is returned
 */
function sumOfNumbersForLoop(nums) {
    let sum = 0;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
    }

    return sum;
}

/**
 * Given an array of integers nums, return the sum of all numbers in that array. Use a while loop.
 * 
 * @param {*} nums The array of which the sum is returned
 */
function sumOfNumbersWhileLoop(nums) {
    let sum = 0;
    let i = 0;
    let value = 0;

    while (value = nums[i]) {
        sum += value;
        i++;
    }

    return sum;
}

/**
 * Given an array of integers nums, return the sum of all numbers in that array. Use recursion.
 * 
 * @param {*} nums The array of which the sum is returned
 */
function sumOfNumbersRecursion(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    if (nums.length === 1) {
        return nums[0];
    }

    return nums[0] + sumOfNumbersRecursion(nums.splice(1));
}

module.exports = {
    sumOfNumbersForLoop: sumOfNumbersForLoop,
    sumOfNumbersWhileLoop: sumOfNumbersWhileLoop,
    sumOfNumbersRecursion: sumOfNumbersRecursion,
};