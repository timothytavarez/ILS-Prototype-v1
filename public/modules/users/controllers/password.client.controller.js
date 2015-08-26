(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('PasswordController', PasswordController);

	function PasswordController($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// Submit forgotten password account id
		$scope.askForPasswordReset = askForPasswordReset;
		// Change user password
		$scope.resetUserPassword = resetUserPassword;


		//If user is signed in then redirect back home
		if ($scope.authentication.user) {
			$location.path('/');
		}

		// Submit forgotten password account id
		function askForPasswordReset() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		}

		// Change user password
		function resetUserPassword() {
			$scope.success = $scope.error = null;
			$http
				.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails)
				.success(success)
				.error(error);


			function success(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}

			function error(response) {
				$scope.error = response.message;
			}
		}
	}
})();
