/**
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 *     -Integers in each row are sorted from left to right.
 *     -The first integer of each row is greater than the last integer of the previous row.
 * 
 * @param {*} matrix 
 * @param {*} target 
 */
function search2DMatrix(matrix, target) {
    var aCurrent1DMatrix = [];

    for (let index = matrix.length - 1; index >= 0; index--) {
        aCurrent1DMatrix = matrix[index];

        // First element is bigger -> move to next matrix
        if (aCurrent1DMatrix[0] > target) {
            continue;
        }

        // First element is smaller or equal -> only possible match
        else {
            return search1DMatrix(aCurrent1DMatrix, target);
        }
    }

    // Fallback
    return false;
}

/**
 * Search for a value in a 1dimensional matrix (i.e. array of values)
 * 
 * @param {*} matrix 
 * @param {*} target 
 */
function search1DMatrix(matrix, target) {
    for (let index = 0; index < matrix.length; index++) {
        if (target === matrix[index]) {
            return true;
        }
    }

    return false;
}

module.exports = {
    search2DMatrix: search2DMatrix
};
