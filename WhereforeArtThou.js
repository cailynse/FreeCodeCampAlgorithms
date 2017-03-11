function whatIsInAName(collection, source) {
	// What's in a name?
	var arr = [],
		key = Object.keys(source);
	console.log("Key is: ", key);
	// Only change code below this line
	for (var i = 0; i < collection.length; i++) {
		if (key in collection[i]) {
			if (collection[i][key]) {
				arr.push(collection[i]);
			}
		}
	}

	// Only change code above this line
	return arr;
}

whatIsInAName([{
	first: "Romeo",
	last: "Montague"
}, {
	first: "Mercutio",
	last: null
}, {
	first: "Tybalt",
	last: "Capulet"
}], {
	last: "Capulet"
});
