(function() {
	'use strict';

	// Setting up route
	angular /*@ngInject*/
		.module('users')
		.config(config);

	function config($stateProvider) {
		// Users state routing
		$stateProvider
		.state('common.signup', {
			url: '/signup',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/authentication/signup.client.view.html',
					controller: 'AuthenticationController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.signin', {
			url: '/signin',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/authentication/signin.client.view.html',
					controller: 'AuthenticationController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.listUsers', {
			url: '/users',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/administration/list-users.client.view.html',
					controller: 'AdministrationController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.viewUser', {
			url: '/users/:userId',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/administration/view-user.client.view.html',
					controller: 'AdministrationController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.editUser', {
			url: '/users/:userId/edit',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/administration/edit-user.client.view.html',
					controller: 'AdministrationController',
					controllerAs: 'vm'
				}
			}
		});
	}
})();
