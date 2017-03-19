function fearNotLetter(str) {
	var charCodes = [],
		newStr;
	for (var i = 0; i < str.length; i++) {
		charCodes.push(str.charCodeAt(i));
	}
	for (i = 0; i < charCodes.length - 1; i++) {
		if (charCodes[i] !== charCodes[i + 1] - 1) {
			return String.fromCharCode(charCodes[i] + 1);
		}
	}
	return undefined;
}

fearNotLetter("abce");
