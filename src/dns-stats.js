const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const map = new Map();

	for (let domain of domains) {
		let str = "";
		let arr = domain.split(".").reverse();

		for (let d of arr) {
			str = `${str}.${d}`;
			if (map.has(str)) {
				map.set(str, map.get(str) + 1);
			} else {
				map.set(str, 1);
			}
		}
	}

	let res = {};
	for (let entry of map) {
		res[entry[0]] = entry[1];
	}

	return res;
}

module.exports = {
	getDNSStats,
};
