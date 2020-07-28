function caesarCipher(str, key) {
	return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
}

console.log(caesarCipher("I love JavaScript!", 100));
console.log(caesarCipher("I love JavaScript!", -100));