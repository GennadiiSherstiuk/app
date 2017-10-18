/* jshint node: true */
'use strict';
var parseExel = require('./parseExel.js');
var dao = require('./dao.js');


var filename = '/initial.xlsx';

function  insertXlsx(filename, tableName) {
	var parsedData;
	return parseExel.parseXlsx(filename)
		.then(function(_parsedData) {
			parsedData = _parsedData;
			return dao.createTable(tableName);
		})
		.then(function() {
			return dao.insert(parsedData);
		});
}

module.exports = {
	insertXlsx: insertXlsx
};
