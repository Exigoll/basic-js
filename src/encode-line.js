const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	if (str.length < 2) return str;
	let prev = str[0];
	let count = 1;
	let res = "";

	for (let i = 1; i < str.length; i++) {
		const char = str[i];

		if (prev != char) {
			if (count === 1) {
				res += prev;
			} else {
				res += count + prev;
			}
			prev = char;
			count = 1;
		} else {
			count++;
		}

		if (i === str.length - 1) {
			if (count === 1) {
				res += prev;
			} else {
				res += count + prev;
			}
		}
	}

	return res;
}

module.exports = {
	encodeLine,
};
