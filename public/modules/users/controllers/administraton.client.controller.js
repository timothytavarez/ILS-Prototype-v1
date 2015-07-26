'use strict';

angular.module('users').controller('AdministrationController', ['$scope', '$http', '$location', 'Authentication', 'Users',
  function($scope, $http, $location, Authentication, Users) {
    $scope.authentication = Authentication;

    // If user is not signed in then redirect back home
    //if (!$scope.user) $location.path('/');

    // Find a list of Users
    $scope.find = function() {
      $scope.users = Users.query({});
      console.log($scope.users);
    };

    // Find existing user
    $scope.findOne = function() {
      $scope.user = Users.get({
        userId: $stateParams.userId
      });
    };
  }
]);
