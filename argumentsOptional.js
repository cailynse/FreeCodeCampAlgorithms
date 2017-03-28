function addTogether() {
    var first = arguments[0];

    function isNum(num) {
        if (!isNaN(num) && typeof num === "number") {
            return true;
        }
        return false;
    }

    function addToNum() {
        return function (num) {
            if (isNum(num)) {
                return first + num;
            }
            return undefined;
        }
    }


    if (arguments.length === 2 && isNum(arguments[0]) && isNum(arguments[1])) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1 && isNum(arguments[0])) {
        return addToNum();
    }

    return undefined;
}

addTogether(2, 3);
