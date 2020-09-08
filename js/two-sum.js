/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * @param {*} nums Array of integers
 * @param {*} target Target for indices to add up
 */
function twoSum(nums, target) {
    var resultIndices = [];

    for (let i = 0; i < nums.length; i++) {
        const firstElement = nums[i];

        // Start second loop on successor of first iterated element (i+1)
        for (let j = i + 1; j < nums.length; j++) {
            const secondElement = nums[j];

            if (firstElement + secondElement === target) {
                resultIndices.push(i);
                resultIndices.push(j);
            }
        }

    }

    return resultIndices;
}

module.exports = {
    twoSum: twoSum
};