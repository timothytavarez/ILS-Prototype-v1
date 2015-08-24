'use strict';

// Users service used for communicating with the users REST endpoint
/*@ngInject*/
angular.module('users').factory('Users',
	function($resource) {
		return $resource('users/:userId', { 
			userId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
);
