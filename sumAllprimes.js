function sumPrimes(num) {
	var numArr = [];

	function isPrime(val) {
		if (val > 1) {
			if (val > 2) {
				for (var i = 2; i < val; i++) {
					if (val % i === 0) {
						return false;
					}
				}
				return true;
			}
			return true;
		}
		return false;
	}

	for (var i = 0; i <= num; i++) {
		if (isPrime(i)) {
			numArr.push(i);
		}
	}
	var sum = numArr.reduce((a, b) => a + b, 0);
	return sum;
}

sumPrimes(10);
