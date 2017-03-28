function binaryAgent(str) {
    var binBits = str.split(" ");

    function toDecimal(arr) {
        var binary,
            decimal,
            decBits = [];

        for (var i = 0; i < arr.length; i++) {
            binary = arr[i];
            decimal = parseInt(binary, 2);
            decBits.push(decimal);
        }
        return decBits;
    }

    var decimalArr = toDecimal(binBits);

    function toEnglish(arr) {
        var letters = [],
            letter;
        for (var i = 0; i < arr.length; i++) {
            letter = String.fromCharCode(arr[i]);
            letters.push(letter);
        }
        return letters.join("");

    }

    var string = toEnglish(decimalArr);
    return string;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
