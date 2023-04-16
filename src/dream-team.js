const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	let result = false;

	if (Array.isArray(members) && members.length > 0) {
		let teamName = [];

		for (let member of members) {
			if (typeof member === "string") {
				let name = member.trim();

				if (name.length > 0) {
					teamName.push(name[0].toUpperCase());
				}
			}
		}

		if (teamName.length > 0) {
			result = teamName.sort().join("");
		}
	}

	return result;
}

module.exports = {
	createDreamTeam,
};
