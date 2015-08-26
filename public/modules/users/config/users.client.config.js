(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.config(config)
		.run(run);

	// Config HTTP Error Handling
	function config($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider /*@ngInject*/
			.interceptors
			.push(ResErrorInterceptor);

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
