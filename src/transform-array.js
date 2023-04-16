const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}

	const copyArr = [...arr];

	let length = copyArr.length;
	for (let i = 0; i < length; i++) {
		const item = copyArr[i];

		if (item === "--discard-next") {
			copyArr.splice(i, 2, "---", "---");
		} else if (item === "--discard-prev") {
			if (i === 0) {
				copyArr.splice(i, 1, "---");
			} else {
				copyArr.splice(i - 1, 2, "---", "---");
			}
		} else if (item === "--double-next") {
			if (i === length - 1) {
				copyArr.splice(i, 1);
			} else {
				copyArr.splice(i, 1, copyArr[i + 1]);
			}
		} else if (item === "--double-prev") {
			if (i === 0) {
				copyArr.splice(i, 1);
			} else {
				copyArr.splice(i, 1, copyArr[i - 1]);
			}
		}
	}

	return copyArr.filter(x => x !== "---");
}
const cases = [
	{
		input: [1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5],
		output: [1, 2, 3, 4, 5],
	},
	{
		input: [1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5],
		output: [1, 2, 3, 1337, 1337, 1337, 4, 5],
	},
	{
		input: [1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5],
		output: [1, 2, 3, 4, 5],
	},
	{
		input: [1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5],
		output: [1, 2, 3, 1337, 4, 5],
	},
];

function test() {
	for (let i = 0; i < 4; i++) {
		console.log(transform(cases[i].input), cases[i].output);
	}
}

test();

module.exports = {
	transform,
};
