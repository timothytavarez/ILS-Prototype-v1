(function() {
	'use strict';

	// Setting up route
	angular /*@ngInject*/
		.module('users')
		.config(config);

	function config($stateProvider) {
		// Users state routing
		$stateProvider
		.state('common.forgot', {
			url: '/password/forgot',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/password/forgot-password.client.view.html',
					controller: 'PasswordController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.reset', {
			url: '/password/reset/:token',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/password/reset-password.client.view.html',
					controller: 'PasswordController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.reset-invalid', {
			url: '/password/reset/invalid',
			views: {
				'contentView': { templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html' }
			}
		})
		.state('common.reset-success', {
			url: '/password/reset/success',
			views: {
				'contentView': { templateUrl: 'modules/users/views/password/reset-password-success.client.view.html' }
			}
		});
	}
})();

