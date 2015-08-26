(function() {
	'use strict';

	// Libraries controller
	angular /*@ngInject*/
		.module('libraries')
		.controller('LibrariesController', LibrariesController );

	function LibrariesController($scope, $stateParams, $location, Authentication, Libraries) {
		$scope.authentication = Authentication;

		$scope.create = create;
		$scope.find = find;
		$scope.findOne = findOne;
		$scope.update = update;
		$scope.remove = remove;


		function create() {
			var library = new Libraries ({
				name: this.name
			});

			// Redirect after save
			library.$save(function(response) {
				$location.path('libraries/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		// Find a list of Libraries
		function find() {
			$scope.libraries = Libraries.query();
		}

		// Find existing Library
		function findOne() {
			$scope.library = Libraries.get({ 
				libraryId: $stateParams.libraryId
			});
		}

		// Update existing Library
		function update() {
			var library = $scope.library;

			library.$update(function() {
				$location.path('libraries/' + library._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		// Remove existing Library
		function remove(library) {
			if ( library ) { 
				library.$remove();

				for (var i in $scope.libraries) {
					if ($scope.libraries [i] === library) {
						$scope.libraries.splice(i, 1);
					}
				}
			} else {
				$scope.library.$remove(function() {
					$location.path('libraries');
				});
			}
		}
	}
})();
