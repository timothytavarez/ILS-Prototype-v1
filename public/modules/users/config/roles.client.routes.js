'use strict';

//Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Roles state routing
		$stateProvider.
		state('listRoles', {
			url: '/roles',
			views: {
			  'contentView': {
					templateUrl: 'modules/users/views/list-roles.client.view.html'
			  },
			  'sidebarView' : {
					templateUrl: 'modules/core/views/sidebar.client.view.html' 
			  }
			}
		}).
		state('createRole', {
			url: '/roles/create',
			views: {
			  'contentView': {
					templateUrl: 'modules/users/views/create-role.client.view.html'
			  },
			  'sidebarView' : {
					templateUrl: 'modules/core/views/sidebar.client.view.html' 
			  }
			}
		}).
		state('viewRole', {
			url: '/roles/:roleId',
			views: {
			  'contentView': {
					templateUrl: 'modules/users/views/view-role.client.view.html'
			  },
			  'sidebarView' : {
					templateUrl: 'modules/core/views/sidebar.client.view.html' 
			  }
			}
		}).
		state('editRole', {
			url: '/roles/:roleId/edit',
			views: {
			  'contentView': {
					templateUrl: 'modules/users/views/edit-role.client.view.html'
			  },
			  'sidebarView' : {
					templateUrl: 'modules/core/views/sidebar.client.view.html' 
			  }
			}
		});
	}
]);
