'use strict';


/*@ngInject*/
angular.module('core').controller('HomeController',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
);
