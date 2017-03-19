function spinalCase(str) {
	// "It's such a fine line between stupid, and clever."
	// --David St. Hubbins

	var newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2'),
		regEx = /\W+|_+/g;
	newStr = newStr.replace(regEx, '-').toLowerCase();
	return newStr;

}

spinalCase('This Is Spinal Tap');
