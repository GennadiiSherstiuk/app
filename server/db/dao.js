/* jshint node: true */
'use strict';
var config = require('./../config.js');

var pgp = require('pg-promise')({});

var postgresConf = config.dbconfig.postgres;

var url = 'postgres://'+ postgresConf.username + ':' +  postgresConf.password +
		  '@' + postgresConf.host + ':' + postgresConf.port + '/' + postgresConf.database;

var db = pgp(url);

function  createTable(tableDesriprion) {
	return db.tx(function (t) {
		return t.batch([t.none('CREATE TABLE ' + tableDesriprion)]);
	});	    
}

function insert(data) {
	return db.tx(function(t) {
		return t.batch([t.one('INSERT INTO ' + data)]);
	});
}

module.exports = {
	createTable: createTable,
	insert: insert
};
