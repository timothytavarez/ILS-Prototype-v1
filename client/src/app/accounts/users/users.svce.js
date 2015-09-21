(function() {
	'use strict';

	// Users service used for communicating with the users REST endpoint
	angular /*@ngInject*/
		.module('users')
		.factory('Users', Users );

	function Users($resource) {
		var paramDefaults = { userId: '@_id' };
		var actions = { 
			update: { method: 'PUT' } 
		};
		return $resource('users/:userId', paramDefaults, actions);
	}
})();
