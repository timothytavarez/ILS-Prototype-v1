(function() {
	'use strict';

	angular /*@ngInject*/
		.module('core')
		.controller('LayoutController', LayoutController);
	
	function LayoutController(Authentication, $location) {
		var vm = this;

		vm.authentication = Authentication;

		// Layout controller logic
		if(!Authentication.user) {
			$location.path('/signin');
		}
		vm.showLayout = $location.path() !== '/signin';
	}
})();
