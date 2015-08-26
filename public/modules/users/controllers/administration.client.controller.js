(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('AdministrationController', AdministrationController);

	function AdministrationController($scope, $stateParams, $http, Authentication, Users) {
		$scope.authentication = Authentication;

		$scope.find = find; 
		$scope.findOne = findOne; 

		function find() {
			$scope.users = Users.query({});
		}

		function  findOne() {
			$scope.user = Users.get({
				userId: $stateParams.userId
			});
		}
	}
})();
