(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('AdministrationController', AdministrationController);

	function AdministrationController($stateParams, $http, Authentication, Users) {
		var vm = this;

		vm.authentication = Authentication;
		vm.find = find; 
		vm.findOne = findOne; 

		function find() {
			vm.users = Users.query({});
		}

		function  findOne() {
			vm.user = Users.get({
				userId: $stateParams.userId
			});
		}
	}
})();
