(function() {
	'use strict';

	//Items service used to communicate Items REST endpoints
	/*@ngInject*/
	angular.module('items').factory('Items',
			function($resource) {
				return $resource('items/:itemId', { itemId: '@_id'
				}, {
					update: {
						method: 'PUT'
					},
					checkOut: {
						method: 'PUT',
						url: 'items/:itemId/checkOut'
					},
					checkIn: {
						method: 'PUT',
						url: 'items/:itemId/checkIn'
					},
					renew: {
						method: 'PUT',
						url: 'items/:itemId/renew'
					},
					hold: {
						method: 'PUT',
						url: 'items/:itemId/hold'
					}

				});
			}
	);
})();
