(function() {
	'use strict';

	angular /*@ngInject*/
		.module('core')
		.controller('SidebarController', SidebarController);
	
	function SidebarController($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
})();
