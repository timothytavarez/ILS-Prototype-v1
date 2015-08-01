'use strict';

angular.module('users').controller('AdministrationController', ['$scope', '$stateParams', '$http', '$location', 'Authentication', 'Users',
  function($scope, $stateParams, $http, $location, Authentication, Users) {
    $scope.authentication = Authentication;

    // If user is not signed in then redirect back home
    //if (!$scope.user) $location.path('/');

    // Find a list of Users
    $scope.find = function() {
      $scope.users = Users.query({});
    };

    // Find existing user
    $scope.findOne = function() {
      $scope.user = Users.get({
        userId: $stateParams.userId
      });
      console.log($scope.user);
    };
  }
]);
