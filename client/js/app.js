var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: '/js/partials/index.html'
			// controller: "usersController"
		})
		.when('/users',
		{
			templateUrl: '/js/partials/users.html'
			// controller: "usersController"
		})
		.otherwise({
			redirectTo: '/'
		});

})()