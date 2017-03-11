function convertToRoman(num) {

	var keyValArr = [
      ['0', ''],
      ['1', "A"],
      ['2', "AA"],
      ['3', "AAA"],
      ['4', "AB"],
      ['5', "B"],
      ['6', "BA"],
      ['7', "BAA"],
      ['8', "BAAA"],
      ['9', "AE"],
  ];

	var symbolMap = new Map(keyValArr);

	var breakDown = [],
		romanBits = [],
		newNum = [],
		roman;


	for (var i = 0; i < num.toString().length; i++) {
		breakDown.push(num.toString().charAt(i));
	}

	for (i = 0; i < breakDown.length; i++) {
		var currentNum = breakDown[i];
		romanBits.push(symbolMap.get(currentNum));
	}

	function positionConvert(val, position) {
		var romanNum = val;
		if (position === 'one') {
			romanNum = romanNum.replace(/A/g, 'I');
			romanNum = romanNum.replace(/B/g, 'V');
			romanNum = romanNum.replace(/E/g, 'X');
		} else if (position === 'ten') {
			romanNum = romanNum.replace(/A/g, 'X');
			romanNum = romanNum.replace(/B/g, 'L');
			romanNum = romanNum.replace(/E/g, 'C');
		} else if (position === 'hundred') {
			romanNum = romanNum.replace(/A/g, 'C');
			romanNum = romanNum.replace(/B/g, 'D');
			romanNum = romanNum.replace(/E/g, 'M');
		} else {
			romanNum = romanNum.replace(/A/g, 'M');
		}
		return romanNum;
	}

	function numberSize(numArray) {
		var romanNum,
			romanArr = [];
		if (numArray.length === 1) {
			romanNum = positionConvert(romanBits[0], 'one');
			romanArr.push(romanNum);
			return romanArr;
		} else if (numArray.length === 2) {
			romanNum = positionConvert(romanBits[1], 'one');
			romanArr.unshift(romanNum);
			romanNum = positionConvert(romanBits[0], 'ten');
			romanArr.unshift(romanNum);
			return romanArr;
		} else if (numArray.length === 3) {
			romanNum = positionConvert(romanBits[2], 'one');
			romanArr.unshift(romanNum);
			romanNum = positionConvert(romanBits[1], 'ten');
			romanArr.unshift(romanNum);
			romanNum = positionConvert(romanBits[0], 'hundred');
			romanArr.unshift(romanNum);
			return romanArr;
		} else if (numArray.length === 4) {
			romanNum = positionConvert(romanBits[3], 'one');
			romanArr.unshift(romanNum);
			romanNum = positionConvert(romanBits[2], 'ten');
			romanArr.unshift(romanNum);
			romanNum = positionConvert(romanBits[1], 'hundred');
			romanArr.unshift(romanNum);
			romanNum = positionConvert(romanBits[0], 'thousand');
			romanArr.unshift(romanNum);
			return romanArr;
		} else {
			return "Number length not supported.";
		}
	}
	newNum = numberSize(romanBits);
	newNum = newNum.join("");

	return newNum;
}
