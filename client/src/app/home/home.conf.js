(function() {
	'use strict';

	// Setting up route
	angular /*@ngInject*/
		.module('home')
		.config(config);

	function config($stateProvider, $urlRouterProvider) {
		// $urlRouterProvider.when( !Authentication.user, '/signin' );
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider
		.state('common.home', {
				url: '/',
				views: {
					'contentView': { templateUrl: '/src/app/home/home.tmpl.html' },
					'controller': 'HomeController',
					'controllerAs': "vm"
				}
		});
	}
})();
