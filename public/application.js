(function() {
	'use strict'; 
	//Start by defining the main module and adding the module dependencies
	angular
		.module(ApplicationConfiguration.applicationModuleName, 
				ApplicationConfiguration.applicationModuleVendorDependencies);

	angular /*@ngInject*/
		.module(ApplicationConfiguration.applicationModuleName)
		.config(config);

	//Then define the init function for starting up the application
	angular
		.element(document)
		.ready(init);


	function init() {
		//Fixing facebook bug with redirect
		if (window.location.hash === '#_=_') {
			window.location.hash = '#!';
		}
		//Then init the app
		angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
	}

	function config($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
})();
