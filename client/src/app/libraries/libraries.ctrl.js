(function() {
	'use strict';

	// Libraries controller
	angular /*@ngInject*/
		.module('libraries')
		.controller('LibrariesController', LibrariesController );

	function LibrariesController($stateParams, $location, Authentication, Libraries) {
		var vm = this;

		vm.authentication = Authentication;

		vm.create = create;
		vm.find = find;
		vm.findOne = findOne;
		vm.update = update;
		vm.remove = remove;


		function create() {
			var library = new Libraries({ name: vm.name });

			// Redirect after save
			library.$save(function(response) {
				$location.path('libraries/' + response._id);

				// Clear form fields
				vm.name = '';
			}, function(errorResponse) {
				vm.error = errorResponse.data.message;
			});
		}

		// Find a list of Libraries
		function find() {
			vm.libraries = Libraries.query();
		}

		// Find existing Library
		function findOne() {
			vm.library = Libraries.get({ 
				libraryId: $stateParams.libraryId
			});
		}

		// Update existing Library
		function update() {
			var library = vm.library;

			library.$update(function() {
				$location.path('libraries/' + library._id);
			}, function(errorResponse) {
				vm.error = errorResponse.data.message;
			});
		}

		// Remove existing Library
		function remove(library) {
			if ( library ) { 
				library.$remove();

				for (var i in vm.libraries) {
					if (vm.libraries [i] === library) {
						vm.libraries.splice(i, 1);
					}
				}
			} else {
				vm.library.$remove(function() {
					$location.path('libraries');
				});
			}
		}
	}
})();
