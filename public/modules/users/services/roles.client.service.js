'use strict';

// Authentication service for user variables
angular.module('users').factory('Roles', ['$resource',
	function($resource) {
		return $resource('roles/:roleId', { roleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			},
			assign: {
				method: 'PUT',
				url: 'roles/:roleId/assign/:userId'
			}
		});
	}
]);