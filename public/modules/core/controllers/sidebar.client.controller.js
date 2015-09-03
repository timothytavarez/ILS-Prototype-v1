(function() {
	'use strict';

	angular /*@ngInject*/
		.module('core')
		.controller('SidebarController', SidebarController);
	
	function SidebarController(Authentication) {
		var vm = this;

		// this provides authentication context.
		vm.authentication = Authentication;
	}
})();
