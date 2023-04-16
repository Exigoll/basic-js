const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = String(str);
	const repeatTimes = options.repeatTimes ?? 1;
	const separator = options.separator ?? "+";
	let addition = "";
	if (options.hasOwnProperty("addition")) {
		addition = String(options.addition);
	}
	const additionRepeatTimes = options.additionRepeatTimes ?? 1;
	const additionSeparator = options.additionSeparator ?? "|";

	const additionArr = [];
	for (let i = 0; i < additionRepeatTimes; i++) {
		additionArr.push(addition);
	}
	const additionStr = additionArr.join(additionSeparator);

	repeatArr = [];
	for (let i = 0; i < repeatTimes; i++) {
		repeatArr.push(str + additionStr);
	}

	return repeatArr.join(separator);
}

let t = repeater(null, {
	repeatTimes: 3,
	separator: "??? ",
	addition: null,
	additionRepeatTimes: 3,
	additionSeparator: "!!!",
});

let r =
	"nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null";

console.log(t);
console.log(r);

module.exports = {
	repeater,
};
