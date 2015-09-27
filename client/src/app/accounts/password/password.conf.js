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
					templateUrl: 'src/app/accounts/password/forgot-password.tmpl.html',
					controller: 'PasswordController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.reset', {
			url: '/password/reset/:token',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/password/reset-password.tmpl.html',
					controller: 'PasswordController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.reset-invalid', {
			url: '/password/reset/invalid',
			views: {
				'contentView': { templateUrl: 'src/app/accounts/password/reset-password-invalid.tmpl.html' }
			}
		})
		.state('common.reset-success', {
			url: '/password/reset/success',
			views: {
				'contentView': { templateUrl: 'src/app/accounts/password/reset-password-success.tmpl.html' }
			}
		});
	}
})();

