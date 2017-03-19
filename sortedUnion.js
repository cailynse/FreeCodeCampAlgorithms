function uniteUnique(arr) {
	var newArr = [].concat.apply([], arguments),
		uniVals = new Set(),
		uniArr = [];
	for (var i = 0; i < newArr.length; i++) {
		uniVals.add(newArr[i]);
	}
	for (let item of uniVals) uniArr.push(item);
	return uniArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
