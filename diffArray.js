function diffArray(arr1, arr2) {
	var newArr = [],
		currentTerm,
		indexOf;
	// Same, same; but different.
	for (var i = 0; i < arr1.length; i++) {
		currentTerm = arr1[i];
		indexOf = arr2.indexOf(currentTerm);
		if (indexOf === -1) {
			newArr.push(currentTerm);
		}
	}
	for (i = 0; i < arr2.length; i++) {
		currentTerm = arr2[i];
		indexOf = arr1.indexOf(currentTerm);
		if (indexOf === -1) {
			newArr.push(currentTerm);
		}
	}
	return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
