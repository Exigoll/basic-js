const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let arr = [...names];

	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];

		let idx;
		let count = 1;
		let from = 0;
		while (true) {
			idx = arr.indexOf(item, from);
			if (idx === -1) break;
			if (idx === i) {
				from = idx + 1;
				continue;
			}

			arr[idx] = arr[idx] + `(${count})`;
			count++;
		}
	}

	return arr;
}

module.exports = {
	renameFiles,
};
