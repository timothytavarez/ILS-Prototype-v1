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
					templateUrl: 'src/app/accounts/settings/edit-profile.tmpl.html',
					controller: 'SettingsController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.accounts', {
			url: '/settings/accounts',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/settings/social-accounts.tmpl.html',
					controller: 'SettingsController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.password', {
			url: '/settings/password',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/settings/change-password.tmpl.html',
					controller: 'SettingsController',
					controllerAs: 'vm'
				}
			}
		});
	}
})();

