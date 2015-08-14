'use strict';
    //
		// var sortRoleGroups = function(a, b) {
		// 	//toLowerCase() to make sorting case insensitive
		// 	var strA = a.dispName.toLowerCase(), strB=b.dispName.toLowerCase(); 
		// 	console.log(strA);
		// 	//localeCompare() for comparing unicode characters
		// 	return strA.localeCompare(strB); 
		// };

angular.module('users').controller('RolesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Roles',
	function($scope, $stateParams, $location, Authentication, Roles) {
		$scope.authentication = Authentication;
		$scope.rightsPool = Roles.getAllOptions();

		$scope.noneSelected = function(group) {
			return group.totalSelected === 0 || group.totalSelected === undefined;
		};

		$scope.allSelected = function(group) {
			return group.totalSelected === group.rights.length;
		};

		$scope.partialSelected = function(group) {
			return !$scope.allSelected(group) && !$scope.noneSelected(group);
	};

		$scope.toggleSelect = function(group, right){
			if( right.selected === true ){
				//assert(group.totalSelected !== undefined);
				group.totalSelected--;
			}
			else {
				if( group.totalSelected === undefined ) {
					group.totalSelected = 0;
				}
				//assert(group.totalSelected !== group.maxSelected)
				group.totalSelected++;
			}
			right.selected = !right.selected; //perform the toggle
		};

		$scope.isSelected = function(right) {
			return right.selected;
		};
		
		

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
