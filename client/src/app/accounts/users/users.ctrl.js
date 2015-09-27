(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('UserController', UserController);

	function UserController($location, $stateParams, $http, Authentication, Users) {
		var vm = this;

		vm.authentication = Authentication;
		vm.find = find; 
		vm.findOne = findOne; 
		vm.signup = signup;
		vm.signin = signin;

		function find() {
			vm.users = Users.query({});
		}

		function  findOne() {
			vm.user = Users.get({
				userId: $stateParams.userId
			});
		}

		// If user is signed in then redirect back home
		if (vm.authentication.user) $location.path('/');

		function signup() {
			$http
				.post('/auth/signup', vm.credentials)
				.success(success)
				.error(error);
		}

		function signin() {
			$http
				.post('/auth/signin', vm.credentials)
				.success(success)
				.error(error);
		}

		function success(response) {
			// If successful we assign the response to the global user model
			// And redirect to the index page
			vm.authentication.user = response;
			$location.path('/');
		}

		function error(response) {
			vm.error = response.message;
		}
	}
})();
