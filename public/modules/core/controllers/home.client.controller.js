(function() {
	'use strict';

	angular /*@ngInject*/
		.module('core')
		.controller('HomeController', HomeController);

	function HomeController($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
})();
