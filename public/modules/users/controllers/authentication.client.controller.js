(function(){
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('AuthenticationController', AuthenticationController);

	function AuthenticationController($http, $location, Authentication) {
		var vm = this;

		vm.authentication = Authentication;
		vm.signup = signup;
		vm.signin = signin;

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
