'use strict';

//Libraries service used to communicate Libraries REST endpoints
/*@ngInject*/
angular.module('libraries').factory('Libraries',
	function($resource) {
		return $resource('libraries/:libraryId', { libraryId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
);
