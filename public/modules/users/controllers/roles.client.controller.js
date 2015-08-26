(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('RolesController', RolesController);

	function RolesController($scope, $stateParams, $location, Authentication, Roles) {

		// Scope Variables
		$scope.authentication = Authentication;
		$scope.rightsPool = Roles.getAllOptions();

		// Scope Methods
		$scope.initializeRightsPool = initializeRightsPool;

		$scope.noneSelected = noneSelected;
		$scope.allSelected = allSelected;
		$scope.partialSelected = partialSelected;
		$scope.isSelected = isSelected;
		$scope.toggleSelect = toggleSelect; 
		$scope.initRole = initRole;

		$scope.create = create;
		$scope.remove = remove;
		$scope.update = update;
		$scope.find = find;
		$scope.findOne = findOne;

		function initializeRightsPool() {
			var role = $scope.role;
			var group;
			for( var i = 0; i < $scope.rightsPool.length; i++) {
				group = $scope.rightsPool[i];
				if( role[group.name].length > 0 ) {
					group.totalSelected = role[group.name].length;
					// If this block of code is too costly then we can optimize it by sorting 
					// each string array alphabetically to reduce unnecessary iterations
					// for now i am sorta brute forcing it here
					var right;
					for( var n = 0; n < role[group.name].length; n++ ) {
						right = role[group.name][n];
						var groupRight;
						for( var t = 0; t < group.rights.length; t++ ) {
							groupRight = group.rights[t];
							if( groupRight.name === right ) {
								groupRight.selected = true;
								break;
							}
						}
					}
				}
			}
		}

		function noneSelected(group) {
			return group.totalSelected === 0 || group.totalSelected === undefined;
		}


		function allSelected(group) {
			return group.totalSelected === group.rights.length;
		}

		function partialSelected(group) {
			return !$scope.allSelected(group) && !$scope.noneSelected(group);
		}

		function toggleSelect(group, right){
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
		}

		function isSelected(right) {
			return right.selected;
		}


		function initRole() {
			$scope.role = new Roles({
				roleName: '',
				desc: ''
			});
		}

		function create() {
			var role = $scope.role;

			//Fill out the selected rights
			for( var group, i = 0; i < $scope.rightsPool.length; i++ ) {
				group = $scope.rightsPool[i];
				if( group.totalSelected > 0 ) {
					applyRightsPoolToRole(role, group);
				}
			}

			// Redirect after save
			role.$save(function(response) {
				$location.path('roles/' + response._id);

				// Clear form fields
				$scope.roleName = '';
				$scope.desc = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		function remove(role) {
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
		}

		function update() {
			var role = $scope.role;

			//Fill out the selected rights
			for( var group, i = 0; i < $scope.rightsPool.length; i++ ) {
				group = $scope.rightsPool[i];
				if( group.totalSelected > 0 ) {
					applyRightsPoolToRole(role, group);
				}
			}

			role.$update(function() {
				$location.path('roles/' + role._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		function find() {
			$scope.roles = Roles.query();
		}

		function findOne() {
			$scope.role = Roles.get({ 
				roleId: $stateParams.roleId
			}, $scope.initializeRightsPool);
		}
		//Helper functions  r is right. g is group.
		function applyRightsPoolToRole( r, g ) {
			r[g.name] = [];
			for( var right, i = 0; i < g.rights.length; i++ ) {
				right = g.rights[i];
				if( right.selected === true ) {
					r[g.name].push(right.name);
				} else {
					var index = r[g.name].indexOf(right.name);
					if (index !== -1) {
						r[g.name].splice(index, 1);
					}
				}
			}
		}
	}
})();
