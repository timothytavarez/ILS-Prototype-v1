'use strict';

/*@ngInject*/
angular.module('users').factory('Roles',
	function($resource) {
		return $resource('roles/:roleId', { 
			roleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			},
			getAllOptions: {
				method: 'GET',
				isArray: true,
				url: 'roles/rights'
			}
		});
	}
);
