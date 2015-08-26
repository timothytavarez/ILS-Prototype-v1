(function() {
	'use strict';

	angular /*@ngInject*/
		.module('core')
		.controller('LayoutController', LayoutController);
	
	function LayoutController($scope, Authentication, $location) {
		$scope.authentication = Authentication;
		//
		// Layout controller logic
		if(!Authentication.user) {
			$location.path('/signin');
		}
		$scope.showLayout = $location.path() !== '/signin';
		// fuck metis	$('#menu').metisMenu();
	}
})();
