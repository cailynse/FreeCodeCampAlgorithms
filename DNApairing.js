function pairElement(str) {

	var pairs = {
			G: "C",
			C: "C",
			A: "T",
			T: "A"
		},
		newStr;

	for (var i = 0; i < str.length; i++) {
		newStr.push(str[i]);
		newStr.push(pairs[str[i]]);
	}

	return newStr;

}

pairElement("GCG");
