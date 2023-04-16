const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let count = 0;

	for (let i = 0; i < matrix.length; i++) {
		const line = matrix[i];
		if (i === 0) {
			line.forEach(x => (count += x));
		} else {
			line.forEach((x, idx) => {
				if (matrix[i - 1][idx] !== 0) {
					count += x;
				}
			});
		}
	}

	return count;
}

module.exports = {
	getMatrixElementsSum,
};
