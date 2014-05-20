const fs = require('fs');

fs.writeFile('target.txt', 'an amazing message', function (err) {
	if (err) {
		throw err;
	}
	console.log('file saved!');
});