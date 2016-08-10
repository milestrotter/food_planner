var express = require('express'); 					// Basic framework install
var bodyParser = require('body-parser'); 			// Body parser for posts
var path = require('path'); 						// Path for easier route concatenation
// var http = require('http');
// var app = express();

///////////// Configure Views /////////////

var config = require('./server/config/config.js');				// Connects db
exports.setup = function(app){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static(path.join(__dirname, "./client")));  // Specifying the static file pathway
	app.set('views', path.join(__dirname, "./client/js/views"));	// Default views pathway
	app.set('view engine', 'ejs');	// Setting ejs to default view engine (any file ending in .ejs)
	app.set('port', process.env.PORT || 8000);
	return app;
}
// console.log("This is the dirname: ", __dirname)			// Enable to check the __dirname

///////////// Database Connections /////////////

var mongoose = require('./server/config/mongoose'); 			// Mongoose for database interfacing

///////////// Basic Server Connection /////////////

exports.app = exports.setup(express());
var server = exports.app.listen(exports.app.get('port'), function(){
	console.log('\n ***************************************************');
    console.log('*****                                           *****');
    console.log('*****   Express server listening on port '+exports.app.get('port')+'   *****');
    console.log('*****                                           *****');
    console.log(' ***************************************************\n');
});

///////////// Socket.io Connection /////////////

var io = require('socket.io')(server); 					//Pass in listening server

///////////// Routes and Database Connetions /////////////

var routes = require('./server/config/routes')(exports.app, io);		// Routes for all controllers

// var test_server = app.listen(8080);
module.exports = server                               // Exporting server for testing
