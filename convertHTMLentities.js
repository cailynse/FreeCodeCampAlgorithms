function convertHTML(str) {
	// &colon;&rpar;
	var HTMLentities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'\"': '&quot;',
		"\'": '&apos;'
	};
	return str.split('').map(function (symbol) {
		return HTMLentities[symbol] || symbol;
	}).join('');

}

convertHTML("Dolce & Gabbana");
