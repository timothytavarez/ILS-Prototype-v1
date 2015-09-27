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
						templateUrl: 'src/app/accounts/roles/list-roles.tmpl.html',
						controller: 'RolesController',
						controllerAs: 'vm'
					}
				}
			})
		.state('common.createRole', {
			url: '/roles/create',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/roles/create-role.tmpl.html',
					controller: 'RolesController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.viewRole', {
			url: '/roles/:roleId',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/roles/view-role.tmpl.html',
					controller: 'RolesController',
					controllerAs: 'vm'
				}
			}
		})
		.state('common.editRole', {
			url: '/roles/:roleId/edit',
			views: {
				'contentView': { 
					templateUrl: 'src/app/accounts/roles/edit-role.tmpl.html',
					controller: 'RolesController',
					controllerAs: 'vm'
				}
			}
		});
	}
})();
