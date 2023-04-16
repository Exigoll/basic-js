const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let map1 = getMap(s1);
	let map2 = getMap(s2);
	console.log(map1, map2);
	let count = 0;

	for (let entry of map1) {
		if (map2.has(entry[0])) {
			count += Math.min(entry[1], map2.get(entry[0]));
		}
	}

	return count;
}

function getMap(s) {
	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (map.has(char)) {
			map.set(char, map.get(char) + 1);
		} else {
			map.set(char, 1);
		}
	}

	return map;
}

module.exports = {
	getCommonCharacterCount,
};

console.log(getCommonCharacterCount("aabcc", "adcaa"));
