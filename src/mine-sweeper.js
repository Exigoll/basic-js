const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const result = [];
	const height = matrix.length;
	const width = matrix[0].length;

	for (let i = 0; i < height; i++) {
		const line = [];

		for (let j = 0; j < width; j++) {
			let count = 0;

			if (i > 0 && j > 0 && matrix[i - 1][j - 1]) count++; //7
			if (i > 0 && matrix[i - 1][j]) count++; //8
			if (i > 0 && j < width - 1 && matrix[i - 1][j + 1]) count++; //9
			if (j < width - 1 && matrix[i][j + 1]) count++; //6
			if (i < height - 1 && j < width - 1 && matrix[i + 1][j + 1]) count++; //3
			if (i < height - 1 && matrix[i + 1][j]) count++; //2
			if (i < height - 1 && j > 0 && matrix[i + 1][j - 1]) count++; //1
			if (j > 0 && matrix[i][j - 1]) count++;

			line.push(count);
		}

		result.push(line);
	}

	return result;
}

module.exports = {
	minesweeper,
};
