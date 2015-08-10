'use strict';

angular.module('users').controller('RolesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Roles',
	function($scope, $stateParams, $location, Authentication, Roles) {
		$scope.authentication = Authentication;
		$scope.optionPool = Roles.getAllOptions();
		$scope.optionSelections = {};

		// Create new Role
		$scope.create = function() {
			
			// Create new Role object
			var role = new Roles ({
				roleName: this.roleName,
				desc: this.desc
			});
				
			// Redirect after save
			role.$save(function(response) {
				$location.path('roles/' + response._id);

				// Clear form fields
				$scope.roleName = '';
				$scope.desc = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Role
		$scope.remove = function(role) {
			if ( role ) { 
				role.$remove();

				for (var i in $scope.roles) {
					if ($scope.roles[i] === role) {
						$scope.roles.splice(i, 1);
					}
				}
			} else {
				$scope.role.$remove(function() {
					$location.path('roles');
				});
			}
		};

		// Update existing Role
		$scope.update = function() {
			var role = $scope.role;

			role.$update(function() {
				$location.path('roles/' + role._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Roles
		$scope.find = function() {
			$scope.roles = Roles.query();
		};

		// Find existing Role
		$scope.findOne = function() {
			$scope.role = Roles.get({ 
				roleId: $stateParams.roleId
			});
		};
	}
]);
