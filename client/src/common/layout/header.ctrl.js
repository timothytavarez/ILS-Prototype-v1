(function() {
	'use strict';

	angular /*@ngInject*/
		.module('common')
		.controller('HeaderController', HeaderController);

	function HeaderController($scope, Authentication, Menus) {
		var vm = this;

		// Is this really necessary with ui bootstrap?
		// I have doubts about the meanjs project developers
		// TODO: test this
		vm.toggleCollapsibleMenu = toggleCollapsibleMenu;
		vm.authentication = Authentication;
		vm.isCollapsed = false;
		vm.menu = Menus.getMenu('topbar');

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', menuResponse);


		function toggleCollapsibleMenu() {
			vm.isCollapsed = !vm.isCollapsed;
		}


		function menuResponse() {
			vm.isCollapsed = false;
		}
	}
})();
