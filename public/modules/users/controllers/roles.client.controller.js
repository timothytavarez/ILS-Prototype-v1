(function() {
	'use strict';

	angular /*@ngInject*/
		.module('users')
		.controller('RolesController', RolesController);

	function RolesController($stateParams, $location, Authentication, Roles) {
		var vm = this;

		// Scope Variables
		vm.authentication = Authentication;
		vm.rightsPool = Roles.getAllOptions();

		// Scope Methods
		vm.initializeRightsPool = initializeRightsPool;

		vm.noneSelected = noneSelected;
		vm.allSelected = allSelected;
		vm.partialSelected = partialSelected;
		vm.isSelected = isSelected;
		vm.toggleSelect = toggleSelect; 
		vm.initRole = initRole;

		vm.create = create;
		vm.remove = remove;
		vm.update = update;
		vm.find = find;
		vm.findOne = findOne;

		function initializeRightsPool() {
			var role = vm.role;
			var group;
			for( var i = 0; i < vm.rightsPool.length; i++) {
				group = vm.rightsPool[i];
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
			return !vm.allSelected(group) && !vm.noneSelected(group);
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
			vm.role = new Roles({
				roleName: '',
				desc: ''
			});
		}

		function create() {
			var role = vm.role;

			//Fill out the selected rights
			for( var group, i = 0; i < vm.rightsPool.length; i++ ) {
				group = vm.rightsPool[i];
				if( group.totalSelected > 0 ) {
					applyRightsPoolToRole(role, group);
				}
			}

			// Redirect after save
			role.$save(function(response) {
				$location.path('roles/' + response._id);

				// Clear form fields
				vm.roleName = '';
				vm.desc = '';
			}, function(errorResponse) {
				vm.error = errorResponse.data.message;
			});
		}

		function remove(role) {
			if ( role ) { 
				role.$remove();

				for (var i in vm.roles) {
					if (vm.roles[i] === role) {
						vm.roles.splice(i, 1);
					}
				}
			} else {
				vm.role.$remove(function() {
					$location.path('roles');
				});
			}
		}

		function update() {
			var role = vm.role;

			//Fill out the selected rights
			for( var group, i = 0; i < vm.rightsPool.length; i++ ) {
				group = vm.rightsPool[i];
				if( group.totalSelected > 0 ) {
					applyRightsPoolToRole(role, group);
				}
			}

			role.$update(function() {
				$location.path('roles/' + role._id);
			}, function(errorResponse) {
				vm.error = errorResponse.data.message;
			});
		}

		function find() {
			vm.roles = Roles.query();
		}

		function findOne() {
			vm.role = Roles.get({ 
				roleId: $stateParams.roleId
			}, vm.initializeRightsPool);
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
