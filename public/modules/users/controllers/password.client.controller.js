(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('PasswordController', PasswordController);

	function PasswordController($stateParams, $http, $location, Authentication) {
		var vm = this;

		vm.authentication = Authentication;

		// Submit forgotten password account id
		vm.askForPasswordReset = askForPasswordReset;
		// Change user password
		vm.resetUserPassword = resetUserPassword;


		//If user is signed in then redirect back home
		if (vm.authentication.user) {
			$location.path('/');
		}

		// Submit forgotten password account id
		function askForPasswordReset() {
			vm.success = vm.error = null;

			$http.post('/auth/forgot', vm.credentials).success(function(response) {
				// Show user success message and clear form
				vm.credentials = null;
				vm.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				vm.credentials = null;
				vm.error = response.message;
			});
		}

		// Change user password
		function resetUserPassword() {
			vm.success = vm.error = null;
			$http
				.post('/auth/reset/' + $stateParams.token, vm.passwordDetails)
				.success(success)
				.error(error);


			function success(response) {
				// If successful show success message and clear form
				vm.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}

			function error(response) {
				vm.error = response.message;
			}
		}
	}
})();
