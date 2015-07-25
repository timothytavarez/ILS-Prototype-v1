'use strict';

// Items controller
angular.module('items').controller('ItemsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Items',
	function($scope, $stateParams, $location, Authentication, Items) {
		$scope.authentication = Authentication;

		// Create new Item
		$scope.create = function() {
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
		};

		// Remove existing Item
		$scope.remove = function(item) {
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
		};

		// Update existing Item
		$scope.update = function() {
			var item = $scope.item;

			item.$update(function() {
				$location.path('items/' + item._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.checkOut = function() {
			var item = $scope.item;

			item.$checkOut(function() {
				$location.path('items/' + item._id + '/checkOut');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.checkin = function() {
			var item = $scope.item;

			item.$checkin(function() {
				$location.path('items/' + item._id + '/checkin');
			}, function(errorresponse) {
				$scope.error = errorresponse.data.message;
			});
		};

		$scope.renew = function() {
			var item = $scope.item;

			item.$renew(function() {
				$location.path('items/' + item._id + '/renew');
			}, function(errorresponse) {
				$scope.error = errorresponse.data.message;
			});
		};

		$scope.hold = function() {
			var item = $scope.item;

			item.$hold(function() {
				$location.path('items/' + item._id + '/hold');
			}, function(errorresponse) {
				$scope.error = errorresponse.data.message;
			});
		};

		// Find a list of Items
		$scope.find = function() {
			$scope.items = Items.query();
		};

		// Find existing Item
		$scope.findOne = function() {
			$scope.item = Items.get({ 
				itemId: $stateParams.itemId
			});
		};
	}
]);
