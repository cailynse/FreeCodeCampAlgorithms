function whatIsInAName(collection, source) {
	// What's in a name?
	var keys = Object.keys(source);
	console.log(keys);
	return collection.filter(function (colObj) {
		for (var i = 0; i < keys.length; i++) {
			if (!colObj.hasOwnProperty(keys[i]) || colObj[keys[i]] !== source[keys[i]]) {
				return false;
			}
		}
		return true;
	});
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
