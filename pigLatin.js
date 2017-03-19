function translatePigLatin(str) {
	var newStr = str,
		chars = str.split(""),
		newStr;

	function checkVowel(char) {
		var vowels = ["a", "e", "i", "o", "u"];
		for (var i = 0; i < vowels.length; i++) {
			if (char === vowels[i]) {
				return true;
			}
		}
		return false;
	}
	if (checkVowel(chars[0])) {
		newStr = str + "way";

	} else if (!checkVowel(chars[0]) && !checkVowel(chars[1]) {
			newStr = str.substr(str[2]);
			newStr = newStr + chars[0] + chars[1] + "ay";
		} else {
			newStr = str.substr(str[1]);
			newStr = newStr + chars[0] + "ay";
		}
		return newStr;
	}

	translatePigLatin("consonant");
