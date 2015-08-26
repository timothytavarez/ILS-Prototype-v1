(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('SettingsController', SettingsController);

	function SettingsController($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect to the signin page
		if (!$scope.user) $location.path('/signin');

		$scope.hasConnectedAdditionalSocialAccounts = hasConnectedAdditionalSocialAccounts;
		$scope.isConnectedSocialAccount = isConnectedSocialAccount;
		$scope.removeUserSocialAccount = removeUserSocialAccount;
		$scope.updateUserProfile = updateUserProfile;
		$scope.changeUserPassword = changeUserPassword;


		// Check if there are additional accounts 
		function hasConnectedAdditionalSocialAccounts(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}
			return false;
		}

		// Check if provider is already in use with current user
		function isConnectedSocialAccount(provider) {
			var user = $scope.user;
			return user.provider === provider || (user.additionalProvidersData && user.additionalProvidersData[provider]);
		}

		// Remove a user social account
		function removeUserSocialAccount(provider) {
			$scope.success = $scope.error = null;

			// TODO: use $resource?
			$http
				.delete('/users/accounts', { params: { provider: provider } })
				.success(userSuccess)
				.error(httpError);
		}

		// Update a user profile
		function updateUserProfile(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;

				var user = new Users($scope.user);
				user.$update(userSuccess, updateError);

			} else {
				$scope.submitted = true;
			}
		}

		// Change user password
		function changeUserPassword() {
			$scope.success = $scope.error = null;

			$http
				.post('/users/password', $scope.passwordDetails)
				.success(pwSuccess)
				.error(httpError);

		}

		// Response Handler Callbacks
		function userSuccess(response) {
			$scope.success = true;
			Authentication.user = response;
		}
		function pwSuccess(response) {
			// If successful show success message and clear form
			$scope.success = true;
			$scope.passwordDetails = null;
		}

		function updateError(response) {
			$scope.error = response.data.message;
		}
		function httpError(response) {
			$scope.error = response.message;
		}
	}
})();
