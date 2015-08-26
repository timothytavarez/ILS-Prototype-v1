(function() {
	'use strict';

	// Items controller
	angular /*@ngInject*/
		.module('items')
		.controller('ItemsController', ItemsController);

	function ItemsController($stateParams, $location, Authentication, Items) {
		var vm = this;

		vm.authentication = Authentication;

		vm.canHold = canHold; 
		vm.canCheckOut = canCheckOut; 
		vm.canCheckIn = canCheckIn; 
		vm.canRenew = canRenew; 

		vm.checkOut = checkOut; 
		vm.checkIn = checkIn;
		vm.renew = renew;
		vm.hold = hold; 

		vm.create = create; 
		vm.find = find;
		vm.findOne = findOne;
		vm.update = update;
		vm.remove = remove;  


		function canHold() {
			if( vm.item.isOnHold ) {
				return false;
			}

			else if ( vm.item.checkedOutBy === undefined ) {
				return true;
			}

			return false;
		}

		function canCheckOut() {
			if( vm.item.isCheckedOut ) {
				return false;
			}
			else if( vm.item.isOnHold && vm.item.heldFor._id !== vm.authentication.user._id ) {
				return false;
			}
			return true;
		}

		function canCheckIn() {
			return vm.item.isCheckedOut && vm.authentication.user._id === vm.item.checkedOutBy._id;
		}

		function canRenew() {
			return vm.item.isCheckedOut && vm.authentication.user._id === vm.item.checkedOutBy._id && !vm.item.isOnHold;
		}


		function checkOut() {
			// if( !canCheckOut() ) return;
			var item = vm.item;

			item.$checkOut(function() {

			}, function(errorResponse) {
				vm.error = errorResponse.data.message;
			});
		}

		function checkIn() {
			// if( !canCheckIn() ) return;
			var item = vm.item;
			item.$checkIn(function() {
				$location.path('items/' + item._id);
			}, function(errorresponse) {
				vm.error = errorresponse.data.message;
			});
		}


		function renew() {
			// if( !canRenew() ) return;
			var item = vm.item;

			item.$renew(function() {
				$location.path('items/' + item._id);
			}, function(errorresponse) {
				vm.error = errorresponse.data.message;
			});
		}

		function hold() {
			// if( !canHold() ) return;
			var item = vm.item;

			item.$hold(function() {
				$location.path('items/' + item._id);
			}, function(errorresponse) {
				vm.error = errorresponse.data.message;
			});
		}


		function create() {
			// Create new Item object
			var item = new Items ({
				itemType: vm.itemType,
				title: vm.title,
				author: vm.author,
				desc: vm.desc//,
				// pub: vm.pub,
				// pubDate: vm.pubDate,
				// image: vm.image
			});

			// Redirect after save
			item.$save(function(response) {
				$location.path('items/' + response._id);

				// Clear form fields
				vm.name = '';
			}, function(errorResponse) {
				vm.error = errorResponse.data.message;
			});
		}

		function find() {
			vm.items = Items.query();
		}

		function findOne() {
			vm.item = Items.get({ 
				itemId: $stateParams.itemId
			});
		}

		function update() {
			var item = vm.item;

			item.$update(function() {
				$location.path('items/' + item._id);
			}, function(errorResponse) {
				vm.error = errorResponse.data.message;
			});
		}

		function remove(item) {
			if ( item ) { 
				item.$remove();

				for (var i in vm.items) {
					if (vm.items [i] === item) {
						vm.items.splice(i, 1);
					}
				}
			} else {
				vm.item.$remove(function() {
					$location.path('items');
				});
			}
		}
	}
})();
