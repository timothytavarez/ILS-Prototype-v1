'use strict';

angular.module('core').controller('LayoutController', ['$scope', 'Authentication', '$location',
	function($scope, Authentication, $location) {
		$scope.authentication = Authentication;
		// Layout controller logic
		if(!Authentication.user) {
			$location.path('/signin');
		}
		$scope.showLayout = $location.path() !== '/signin';
	// fuck metis	$('#menu').metisMenu();
	}
]);