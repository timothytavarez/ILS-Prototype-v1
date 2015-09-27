(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.factory('Roles', Roles);

	function Roles($resource) {
		var paramDefaults = { roleId: '@_id' };
		var actions = {
			update: { method: 'PUT' },
			getAllOptions: {
				method: 'GET',
				isArray: true,
				url: 'roles/rights'
			}
		};
		return $resource('roles/:roleId', paramDefaults, actions);
	}
})();
