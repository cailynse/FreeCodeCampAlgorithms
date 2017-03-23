function steamrollArray(arr) {
    // I'm a steamroller, baby
    var mergedArr = [].concat.apply([], arr);

    for (var i = 0; i < mergedArr.length; i++) {
        while (Array.isArray(mergedArr[i])) {
            mergedArr = [].concat.apply([], mergedArr);
        }
    }

    return mergedArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
