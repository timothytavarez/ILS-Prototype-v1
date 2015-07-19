'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', //'Authentication',
	function($locationProvider/* , Authentication */) {
		$locationProvider.hashPrefix('!');
	}
]);//.
// run(['$rootScope', '$location', 'Authentication',
// 	function($rootScope, $location, Authentication ) {
// 		$rootScope.$on( "$routeChangeStart", function(event, next, current) {
// 			if (Authentication.user == null) {
// 				//no logged user, redirect to /login
// 				// if ( next.templateUrl !== 'modules/users/views/authentication/signin.client.view.html') {
// 				console.log('routing to signin page');
// 					$location.path("/signin");
// 				// }
// 			}
// 		});
// 	}
// ]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
	// if( !Authentication.user ) {
	// 	$location.path('/signin');
	// }
});
