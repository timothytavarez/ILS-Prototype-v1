(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.config(config)
		.run(run);

	// Config HTTP Error Handling
	function config($httpProvider, $stateProvider) {

		// Set the httpProvider "not authorized" interceptor
		$httpProvider /*@ngInject*/
			.interceptors
			.push(ResErrorInterceptor);

		// Users state routing
		$stateProvider
		.state('common.signup', {
			url: '/signup',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/users/sign-up.tmpl.html',
					controller: 'UserController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.signin', {
			url: '/signin',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/users/sign-in.tmpl.html',
					controller: 'UserController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.listUsers', {
			url: '/users',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/users/list-users.tmpl.html',
					controller: 'UserController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.viewUser', {
			url: '/users/:userId',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/users/view-user.tmpl.html',
					controller: 'UserController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.editUser', {
			url: '/users/:userId/edit',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/users/edit-user.tmpl.html',
					controller: 'UserController',
					controllerAs: 'vm'
				}
			}
		});

		function ResErrorInterceptor($q, $location, Authentication) {
			return { responseError: handleRej };

			function handleRej(rejection) {
				switch (rejection.status) {
					case 401:
						// Deauthenticate the global user 
						// then Redirect to signin page
						Authentication.user = null;
						$location.path('signin');
						break;
					case 403:
						// Add unauthorized behaviour 
						break;
				}
				return $q.reject(rejection);
			}
		}
	}

	function run(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Users', 'users', 'user', '/users');
	}
})();
