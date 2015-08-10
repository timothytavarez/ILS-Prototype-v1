'use strict';

//Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Roles state routing
		$stateProvider.
		state('listRoles', {
			url: '/roles',
			templateUrl: 'modules/users/views/list-roles.client.view.html'
		}).
		state('createRole', {
			url: '/roles/create',
			templateUrl: 'modules/users/views/create-role.client.view.html'
		}).
		state('viewRole', {
			url: '/roles/:roleId',
			templateUrl: 'modules/users/views/view-role.client.view.html'
		}).
		state('editRole', {
			url: '/roles/:roleId/edit',
			templateUrl: 'modules/users/views/edit-role.client.view.html'
		});
	}
]);
