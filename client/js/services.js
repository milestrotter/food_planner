(function(){
	'use strict'

	angular
		.module('myApp')
		.factory('userFactory', Controller)

	function factory($http){
		var service = {};
		var user = null;
		function getSession (callback){
			$http.get('/session')
				.then(function(res){
					console.log(res)
					if (res.data.status){
						user = res.data.user;
						callback(user);
					}
				})
				.catch(function(err){
					console.log(err);
				})
		}
		return service
	}
})()