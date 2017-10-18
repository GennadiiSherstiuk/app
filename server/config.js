var fs = require('fs');

var dbconfig = JSON.parse(fs.readFileSync( __dirname + '/datasources.json', 'utf8'));

module.exports = {
	dbconfig: dbconfig
};