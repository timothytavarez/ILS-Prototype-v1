'use strict';

/*@ngInject*/
angular.module('core').controller('LayoutController',
	function($scope, Authentication, $location) {
		$scope.authentication = Authentication;
		// Layout controller logic
		if(!Authentication.user) {
			$location.path('/signin');
		}
		$scope.showLayout = $location.path() !== '/signin';
	// fuck metis	$('#menu').metisMenu();
	}
);
