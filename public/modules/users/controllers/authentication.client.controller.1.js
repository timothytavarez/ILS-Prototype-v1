(function(){
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('AuthenticationController', AuthenticationController);

	function AuthenticationController($scope, $http, $location, Authentication) {

		$scope.authentication = Authentication;
		$scope.signup = signup;
		$scope.signin = signin;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		function signup() {
			$http
				.post('/auth/signup', $scope.credentials)
				.success(success)
				.error(error);
		}

		function signin() {
			$http
				.post('/auth/signin', $scope.credentials)
				.success(success)
				.error(error);
		}

		function success(response) {
			// If successful we assign the response to the global user model
			// And redirect to the index page
			$scope.authentication.user = response;
			$location.path('/');
		}

		function error(response) {
			$scope.error = response.message;
		}
	}
})();
