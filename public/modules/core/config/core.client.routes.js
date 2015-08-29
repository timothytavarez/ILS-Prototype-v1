(function() {
	'use strict';

	// Setting up route
	angular /*@ngInject*/
		.module('core')
		.config(config);

	function config($stateProvider, $urlRouterProvider) {
		// $urlRouterProvider.when( !Authentication.user, '/signin' );
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider
			.state('common', {
				abstract: true,
				views: {
					'layoutView': { 
						templateUrl: 'modules/core/views/layout.client.view.html',
						controller: 'LayoutController',
						controllerAs: 'vm'
					},
					'navbarView@common': { 
						templateUrl: 'modules/core/views/header.client.view.html',
						controller: 'HeaderController',
						controllerAs: 'vm'
					},
					'sidebarView@common': { 
						templateUrl: 'modules/core/views/sidebar.client.view.html',
						controller: 'SidebarController',
						conrollerAs: 'vm'
					}
				}
			})
		.state('common.home', {
				url: '/',
				views: {
					'contentView': { templateUrl: 'modules/core/views/home.client.view.html' },
				}
		});
	}
})();
