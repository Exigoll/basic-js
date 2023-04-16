const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		if (!Array.isArray(arr)) return 0;

		let dep = 1;
		let max = 0;

		for (const item of arr) {
			const depth = this.calculateDepth(item);
			if (max < depth) {
				max = depth;
			}
		}

		return dep + max;
	}
}

module.exports = {
	DepthCalculator,
};
