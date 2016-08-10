var users = require('../controllers/users.js');
var mongoose = require('mongoose');

module.exports = function Routes(app, io){
	app.get('/', 						function(req, res){ users.index(req, res)});
	app.get('/secondpage', 				function(req, res){ users.secondpage(req, res)});


	// io.sockets.on('connection', function(socket){`
	// 	console.log("Socket Connection Enabled");
		
	// 	socket.on('client_ready', function(req){
	// 		socket.emit('response', {msg: "hello world"});

	// 	})
	// });
};


///////////// Socket Response Options /////////////

///////// emiting to the requester /////////
	// socket.emit('response', {msg: "hello world"});

///////// broadcast to everyone except the requester /////////
	// socket.broadcast.emit('global_event', { msg: 'hello' });

///////// broadcasting to everyone /////////
	// io.emit('event', {msg: 'hi' });