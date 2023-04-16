const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	#alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	constructor(direct = true) {
		this.direct = direct;
	}

	encrypt(message, key) {
		if (!message || !key) {
			throw new Error("Incorrect arguments!");
		}

		let encryptedMessage = "";

		message = message.toUpperCase();
		key = key.toUpperCase();

		if (key.length < message.length) {
			key = key.padEnd(message.length, key);
		} else if (key.length > message.length) {
			key = key.slice(0, message.length);
		}

		let shift = 0;

		for (let i = 0; i < message.length; i++) {
			const messChar = message[i];
			const keyChar = key[i - shift];
			const messCharPos = this.#alphabet.indexOf(messChar);
			const keyCharPos = this.#alphabet.indexOf(keyChar);

			if (messCharPos === -1) {
				encryptedMessage = encryptedMessage.concat(message[i]);
				shift++;
				continue;
			}

			let n = messCharPos + keyCharPos;
			if (n > 25) {
				n = n - 26;
			}

			const encryptChar = this.#alphabet.charAt(n);
			encryptedMessage = encryptedMessage.concat(encryptChar);
		}

		if (!this.direct) {
			return encryptedMessage.split("").reverse().join("");
		}

		return encryptedMessage;
	}

	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
			throw new Error("Incorrect arguments!");
		}

		let decryptedMessage = "";

		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();

		if (key.length < encryptedMessage.length) {
			key = key.padEnd(encryptedMessage.length, key);
		} else if (key.length > encryptedMessage.length) {
			key = key.slice(0, encryptedMessage.length);
		}

		let shift = 0;

		for (let i = 0; i < encryptedMessage.length; i++) {
			const messChar = encryptedMessage[i];
			const keyChar = key[i - shift];
			const messCharPos = this.#alphabet.indexOf(messChar);
			const keyCharPos = this.#alphabet.indexOf(keyChar);

			if (messCharPos === -1) {
				decryptedMessage = decryptedMessage.concat(encryptedMessage[i]);
				shift++;
				continue;
			}

			let n = messCharPos - keyCharPos;
			if (n < 0) {
				n = 26 + n;
			}

			const decryptChar = this.#alphabet.charAt(n);
			decryptedMessage = decryptedMessage.concat(decryptChar);
		}

		if (!this.direct) {
			return decryptedMessage.split("").reverse().join("");
		}

		return decryptedMessage;
	}
}

module.exports = {
	VigenereCipheringMachine,
};
