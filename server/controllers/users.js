var mongoose = require('mongoose');
var User = mongoose.model('User');

var retrieved_query = {};

module.exports = {
	index: function(req, res){
		var d = new Date();
		User.remove({}, function(err, removed){});
		User.create({first_name: "Cletus", last_name:"Hillbilly", date: d});

		res.render('index', {title: "Food Planner"});
	},
	secondpage: function(req, res){
		User.findOne(function(err, result){
			if(err){
				return console.log(err);
			}
			// console.log("This is the result: "+result);
			req.users = result; 
		});
		setTimeout(function(){
			// console.log("This is outside the scope: "+req.users);
			res.render('nextpage', {title: "Second Page", data: req.users});
		}, 150);
	}
};