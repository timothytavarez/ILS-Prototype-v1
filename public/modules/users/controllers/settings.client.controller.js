(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('SettingsController', SettingsController);

	function SettingsController($http, $location, Users, Authentication) {
		var vm = this;

		vm.user = Authentication.user;

		// If user is not signed in then redirect to the signin page
		if (!vm.user) $location.path('/signin');

		vm.hasConnectedAdditionalSocialAccounts = hasConnectedAdditionalSocialAccounts;
		vm.isConnectedSocialAccount = isConnectedSocialAccount;
		vm.removeUserSocialAccount = removeUserSocialAccount;
		vm.updateUserProfile = updateUserProfile;
		vm.changeUserPassword = changeUserPassword;


		// Check if there are additional accounts 
		function hasConnectedAdditionalSocialAccounts(provider) {
			for (var i in vm.user.additionalProvidersData) {
				return true;
			}
			return false;
		}

		// Check if provider is already in use with current user
		function isConnectedSocialAccount(provider) {
			var user = vm.user;
			return user.provider === provider || (user.additionalProvidersData && user.additionalProvidersData[provider]);
		}

		// Remove a user social account
		function removeUserSocialAccount(provider) {
			vm.success = vm.error = null;

			// TODO: use $resource?
			$http
				.delete('/users/accounts', { params: { provider: provider } })
				.success(userSuccess)
				.error(httpError);
		}

		// Update a user profile
		function updateUserProfile(isValid) {
			if (isValid) {
				vm.success = vm.error = null;

				var user = new Users(vm.user);
				user.$update(userSuccess, updateError);

			} else {
				vm.submitted = true;
			}
		}

		// Change user password
		function changeUserPassword() {
			vm.success = vm.error = null;

			$http
				.post('/users/password', vm.passwordDetails)
				.success(pwSuccess)
				.error(httpError);

		}

		// Response Handler Callbacks
		function userSuccess(response) {
			vm.success = true;
			Authentication.user = response;
		}
		function pwSuccess(response) {
			// If successful show success message and clear form
			vm.success = true;
			vm.passwordDetails = null;
		}

		function updateError(response) {
			vm.error = response.data.message;
		}
		function httpError(response) {
			vm.error = response.message;
		}
	}
})();
