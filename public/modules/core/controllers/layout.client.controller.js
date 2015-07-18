'use strict';

angular.module('core').controller('LayoutController', ['$scope', '$location',
	function($scope, $location) {
		// Layout controller logic
		// ...
		$scope.showLayout = $location.path() != "/signin";
		console.log( $scope.showLayout );
	}
]);
