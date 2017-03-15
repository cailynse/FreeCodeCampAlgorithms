function myReplace(str, before, after) {
	function checkCase(string) {
		var char = string[0],
			newWord = after,
			newStr;
		if (char === char.toUpperCase()) {
			return true;
		} else {
			return false;
		}
	}

	function toTitleCase(string) {
		var char = string[0],
			tCase = string;
		tCase = string.replace(char, char.toUpperCase());
		return tCase;
	}

	if (checkCase(before)) {
		newWord = toTitleCase(after);
		return str.replace(before, newWord);
	} else {
		return str.replace(before, after);
	}
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
