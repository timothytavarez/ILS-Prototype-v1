(function() {
	'use strict';

	// Items controller
	angular /*@ngInject*/
		.module('items')
		.controller('ItemsController', ItemsController);

	function ItemsController($scope, $stateParams, $location, Authentication, Items) {
		$scope.authentication = Authentication;

		$scope.canHold = canHold; 
		$scope.canCheckOut = canCheckOut; 
		$scope.canCheckIn = canCheckIn; 
		$scope.canRenew = canRenew; 

		$scope.checkOut = checkOut; 
		$scope.checkIn = checkIn;
		$scope.renew = renew;
		$scope.hold = hold; 

		$scope.create = create; 
		$scope.find = find;
		$scope.findOne = findOne;
		$scope.update = update;
		$scope.remove = remove;  


		function canHold() {
			if( $scope.item.isOnHold ) {
				return false;
			}

			else if ( $scope.item.checkedOutBy === undefined ) {
				return true;
			}

			return false;
		}

		function canCheckOut() {
			if( $scope.item.isCheckedOut ) {
				return false;
			}
			else if( $scope.item.isOnHold && $scope.item.heldFor._id !== $scope.authentication.user._id ) {
				return false;
			}
			return true;
		}

		function canCheckIn() {
			return $scope.item.isCheckedOut && $scope.authentication.user._id === $scope.item.checkedOutBy._id;
		}

		function canRenew() {
			return $scope.item.isCheckedOut && $scope.authentication.user._id === $scope.item.checkedOutBy._id && !$scope.item.isOnHold;
		}


		function checkOut() {
			// if( !canCheckOut() ) return;
			var item = $scope.item;

			item.$checkOut(function() {

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		function checkIn() {
			// if( !canCheckIn() ) return;
			var item = $scope.item;
			item.$checkIn(function() {
				$location.path('items/' + item._id);
			}, function(errorresponse) {
				$scope.error = errorresponse.data.message;
			});
		}


		function renew() {
			// if( !canRenew() ) return;
			var item = $scope.item;

			item.$renew(function() {
				$location.path('items/' + item._id);
			}, function(errorresponse) {
				$scope.error = errorresponse.data.message;
			});
		}

		function hold() {
			// if( !canHold() ) return;
			var item = $scope.item;

			item.$hold(function() {
				$location.path('items/' + item._id);
			}, function(errorresponse) {
				$scope.error = errorresponse.data.message;
			});
		}


		function create() {
			// Create new Item object
			var item = new Items ({
				itemType: this.itemType,
				title: this.title,
				author: this.author,
				desc: this.desc//,
				// pub: this.pub,
				// pubDate: this.pubDate,
				// image: this.image
			});

			// Redirect after save
			item.$save(function(response) {
				$location.path('items/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		function find() {
			$scope.items = Items.query();
		}

		function findOne() {
			$scope.item = Items.get({ 
				itemId: $stateParams.itemId
			});
		}

		function update() {
			var item = $scope.item;

			item.$update(function() {
				$location.path('items/' + item._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		function remove(item) {
			if ( item ) { 
				item.$remove();

				for (var i in $scope.items) {
					if ($scope.items [i] === item) {
						$scope.items.splice(i, 1);
					}
				}
			} else {
				$scope.item.$remove(function() {
					$location.path('items');
				});
			}
		}
	}
})();
