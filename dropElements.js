function dropElements(arr, func) {
    // Drop them elements.
    var newArr = arr.slice(0);

    for (var i = 0; i < arr.length; i++) {
        if (!func(newArr[0])) {
            newArr.shift();
        } else {
            return newArr;
        }
    }
    return newArr;
}

dropElements([1, 2, 3], function (n) {
    return n < 3;
});
