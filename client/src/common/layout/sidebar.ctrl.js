(function() {
	'use strict';

	angular /*@ngInject*/
		.module('common')
		.controller('SidebarController', SidebarController);
	
	function SidebarController(Authentication) {
		var vm = this;

		// this provides authentication context.
		vm.authentication = Authentication;
	}
})();
