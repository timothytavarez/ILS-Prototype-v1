(function() {
	'use strict';

	//Libraries service used to communicate Libraries REST endpoints
	angular /*@ngInject*/
		.module('libraries')
		.factory('Libraries', Libraries);

	function Libraries($resource) {
		var paramDefaults = { libraryId: '@_id' };
		var actions = {
			update: { method: 'PUT' }
		};
		return $resource('libraries/:libraryId', paramDefaults, actions);
	}
})();
