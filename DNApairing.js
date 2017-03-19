function pairElement(str) {
<<<<<<< Updated upstream
	return str;
=======

	var pairs = {
			G: "C",
			C: "G",
			A: "T",
			T: "A"
		},
		chars = str.split(""),
		pair = [],
		newStr = [];

	for (var i = 0; i < chars.length; i++) {
		pair = [chars[i], pairs[chars[i]]];
		newStr.push(pair);
	}

	return newStr;
>>>>>>> Stashed changes

}

pairElement("GCG");
