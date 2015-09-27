(function() {
	'use strict';

	//Items service used to communicate Items REST endpoints
	angular /*@ngInject*/
		.module('items')
		.factory('Items', Items);

	function Items($resource) {
		var paramDefaults = { itemId: '@_id' };
		var actions = {
			update: { method: 'PUT' },
			checkOut: { method: 'PUT', url: 'items/:itemId/checkOut' },
			checkIn: { method: 'PUT', url: 'items/:itemId/checkIn' },
			renew: { method: 'PUT', url: 'items/:itemId/renew' },
			hold: { method: 'PUT', url: 'items/:itemId/hold' }
		};

		return $resource('items/:itemId', paramDefaults, actions);
	}
})();
