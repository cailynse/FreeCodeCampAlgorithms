function translatePigLatin(str) {
	var newStr = str,
		chars = str.split("");

	function checkVowel(char) {
		var vowels = ["a", "e", "i", "o", "u"];
		for (var i = 0; i < vowels.length; i++) {
			if (char === vowels[i]) {
				return true;
			}
		}
		return false;
	}
	return str;
}

translatePigLatin("consonant");
