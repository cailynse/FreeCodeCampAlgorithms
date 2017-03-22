function smallestCommons(arr) {
    var sortedArr = arr,
        numsBetween = [],
        leastCommon;

    function compare(a, b) {
        return b - a;
    }
    sortedArr.sort(compare);

    for (var i = arr[0]; i >= arr[1]; i--) {
        numsBetween.push(i);
    }

    console.log(numsBetween);

    // Euclid's Algorithm 
    function gcd(a, b) {
        if (!b) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }

    leastCommon = numsBetween.reduce(function (value, currValue) {
        var currGCD = gcd(value, currValue);
        return (value * currValue) / currGCD;
    });

    return leastCommon;

}


smallestCommons([1, 5]);
