(function() {
	'use strict';

	angular /*@ngInject*/
		.module('home')
		.controller('HomeController', HomeController);

	function HomeController(Authentication) {
		var vm = this;
	
		// This provides Authentication context.
		vm.authentication = Authentication;
	}
})();
