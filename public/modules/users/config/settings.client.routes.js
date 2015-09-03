(function() {
	'use strict';

	// Setting up route
	angular /*@ngInject*/
		.module('users')
		.config(config);

	function config($stateProvider) {
		// Users state routing
		$stateProvider
		.state('common.profile', {
			url: '/settings/profile',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/settings/edit-profile.client.view.html',
					controller: 'SettingsController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.accounts', {
			url: '/settings/accounts',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/settings/social-accounts.client.view.html',
					controller: 'SettingsController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.password', {
			url: '/settings/password',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/settings/change-password.client.view.html',
					controller: 'SettingsController',
					controllerAs: 'vm'
				}
			}
		});
	}
})();

