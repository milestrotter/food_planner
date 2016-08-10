(function(){
	'use strict'

	angular
		.module('myApp')
		.controller('usersController', Controller)

	function Controller (userFactory, $location){
		var _this = this

		activate()

		function activate() {
			userFactory.getSessionUser(function(data){
				console.log(data);
				$location.url('/');
			})
		}
		
	}
})