'use strict';

angular.module('users').factory('Roles', ['$resource',
	function($resource) {
			return $resource('roles/:roleId', { roleId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}//,
		// hold: {
		// 	method: 'PUT',
		// 	url: 'items/:itemId/hold'
		// }
	});
}]);
