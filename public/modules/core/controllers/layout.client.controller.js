'use strict';

angular.module('core').controller('LayoutController', ['$scope', 'Authentication', '$location',
	function($scope, Authentication, $location) {
		$scope.authentication = Authentication;
		// Layout controller logic
		// ...
		$scope.showLayout = $location.path() !== '/signin';
		console.log( $scope.showLayout );
	}
]);
