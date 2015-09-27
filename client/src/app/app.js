(function() {
	'use strict'; 


	angular
		.module('muse', [
				'ngResource', 
				'ngCookies',  
				'ngAnimate', 
				'ngTouch',  
				'ngSanitize',  
				'ui.router', 
				'ui.bootstrap', 
				'ui.utils', 
				'ui.scroll',
				'home',
				'users',
				'items',
				'libraries',
				'common',
				// 'common.services.data',
				// 'common.services.menus',
				// 'common.directives.version',
				// 'common.filters.uppercase',
				// 'common.interceptors.http',
				// 'templates'
		])
		.config(config);


	angular
		.element(document)
		.ready(init);


	function init() {
		//Fixing facebook bug with redirect
		if (window.location.hash === '#_=_') {
			window.location.hash = '#!';
		}
		//Then init the app
		angular.bootstrap(document, ['muse']);
	}

	// function config($locationProvider, $urlRouterProvider, $logProvider, $httpProvider) {
	function config($locationProvider, $urlRouterProvider, $logProvider) {
    $logProvider.debugEnabled(true);
    // $httpProvider.interceptors.push('httpInterceptor');

		$locationProvider.hashPrefix('!');
	}
})();
