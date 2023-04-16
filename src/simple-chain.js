const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	chain: [],

	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		this.chain.push(String(value));
		return this;
	},
	removeLink(position) {
		if (
			Number.isInteger(position) &&
			position - 1 < this.chain.length &&
			position - 1 >= 0
		) {
			this.chain.splice(position - 1, 1);
			return this;
		} else {
			this.chain = [];
			throw new Error("You can't remove incorrect link!");
		}
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		const copyChain = [...this.chain];
		this.chain = [];
		return `( ${copyChain.join(" )~~( ")} )`;
	},
};

module.exports = {
	chainMaker,
};

let t = chainMaker
	.reverseChain()
	.reverseChain()
	.reverseChain()
	.addLink(NaN)
	.reverseChain()
	.addLink(null)
	.addLink(1.233)
	.addLink(true)
	.addLink(false)
	.removeLink(3)
	.addLink(1.233)
	.finishChain();

let r = "+( NaN )~~( null )~~( true )~~( false )~~( 1.233 )";
console.log(t);
console.log(r);
