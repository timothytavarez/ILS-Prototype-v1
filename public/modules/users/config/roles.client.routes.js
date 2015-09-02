(function() {
	'use strict';

	//Setting up route
	angular /*@ngInject*/
		.module('users')
		.config(config);

	function config($stateProvider) {
		// Roles state routing
		$stateProvider
			.state('common.listRoles', {
				url: '/roles',
				views: {
					'contentView': { 
						templateUrl: 'modules/users/views/roles/list-roles.client.view.html',
						controller: 'RolesController',
						controllerAs: 'vm'
					}
				}
			})
		.state('common.createRole', {
			url: '/roles/create',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/roles/create-role.client.view.html',
					controller: 'RolesController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.viewRole', {
			url: '/roles/:roleId',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/roles/view-role.client.view.html',
					controller: 'RolesController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.editRole', {
			url: '/roles/:roleId/edit',
			views: {
				'contentView': { 
					templateUrl: 'modules/users/views/roles/edit-role.client.view.html',
					controller: 'RolesController',
					controllerAs: 'vm'
				}
			}
		});
	}
})();
