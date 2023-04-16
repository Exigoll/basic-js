const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const num = String(n).split("");
	let max = 0;

	for (let i = 0; i < num.length; i++) {
		let arr = [...num];
		arr.splice(i, 1);
		let n = parseInt(arr.join(""));
		if (n > max) {
			max = n;
		}
	}
	return max;
}
module.exports = {
	deleteDigit,
};
