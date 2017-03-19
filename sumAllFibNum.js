function sumFibs(num) {
	var fibs = [1, 1],
		currentNum,
		sum;

	function isOdd(value) {
		return value % 2 !== 0;
	}

	for (var i = 1; i < num; i++) {
		currentNum = fibs[i] + fibs[i - 1];
		if (currentNum <= num) {
			fibs.push(currentNum);
		}
	}
	fibs = fibs.filter(isOdd);
	sum = fibs.reduce((a, b) => a + b, 0);
	return sum;

}


sumFibs(4);
