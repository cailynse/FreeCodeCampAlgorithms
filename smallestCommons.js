function smallestCommons(arr) {
	var sortedArr = arr,
		numsBetween = [];

	function compare(a, b) {
		return a - b;
	}
	sortedArr.sort(compare);

	for (var i = arr[0]; i <= arr[1]; i++) {
		numsBetween.push(i);
	}

	console.log(numsBetween);

	// Euclid's Algorithm 

	var gcd = function (a, b) {
		if (!b) {
			return a;
		}

		return gcd(b, a % b);
	};
	console.log(gcd(462, 910));


	return arr;
}


smallestCommons([1, 5]);
