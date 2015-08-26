(function() {
	'use strict';

	angular /*@ngInject*/
		.module('core')
		.controller('HeaderController', HeaderController);

	function HeaderController($scope, Authentication, Menus) {

		$scope.toggleCollapsibleMenu = toggleCollapsibleMenu;
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', menuResponse);


		function toggleCollapsibleMenu() {
			$scope.isCollapsed = !$scope.isCollapsed;
		}


		function menuResponse() {
			$scope.isCollapsed = false;
		}
	}
})();
