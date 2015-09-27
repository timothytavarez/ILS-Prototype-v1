(function() {
	'use strict';

	// Setting up route
	angular /*@ngInject*/
		.module('common')
		.config(config);

	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('common', {
				abstract: true,
				views: {
					'layoutView': { 
						templateUrl: 'src/common/layout/layout.tmpl.html',
						controller: 'LayoutController',
						controllerAs: 'vm'
					},
					'navbarView@common': { 
						templateUrl: 'src/common/layout/header.tmpl.html',
						controller: 'HeaderController',
						controllerAs: 'vm'
					},
					'sidebarView@common': { 
						templateUrl: 'src/common/layout/sidebar.tmpl.html',
						controller: 'SidebarController',
						conrollerAs: 'vm'
					}
				}
			});
	}
})();
