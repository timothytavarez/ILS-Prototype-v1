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
			.state('home', {
				url: '/',
				views: {
					'contentView': { templateUrl: 'modules/core/views/home.client.view.html' },
					'sidebarView': { templateUrl: 'modules/core/views/sidebar.client.view.html' }
				}
			});
	}
})();
