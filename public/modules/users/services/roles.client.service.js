'use strict';

angular.module('users').factory('Roles', ['$resource',
	function($resource) {
			var Rights = require('../../../common/rights.client.bundle.js');
			console.log( Rights );
			console.log( Rights.name );
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