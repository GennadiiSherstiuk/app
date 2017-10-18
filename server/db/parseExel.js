/* jshint node: true */
'use strict';
var Excel = require('exceljs');

var workbook = new Excel.Workbook();


function parseXlsx(filename) {
	return workbook.xlsx.readFile(filename)
		.then(function(data) {
			return data;
		})
		.catch(function(error) {
			console.log(error);
		});
}


module.exports = {
	parseXlsx: parseXlsx
};
